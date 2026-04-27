#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { FieldValue, getFirestore } from "firebase-admin/firestore";

function loadDotEnvLocal() {
  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;

  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const eqIndex = trimmed.indexOf("=");
    if (eqIndex <= 0) continue;

    const key = trimmed.slice(0, eqIndex).trim();
    let value = trimmed.slice(eqIndex + 1).trim();

    const singleQuote = String.fromCharCode(39);
    if (
      (value.startsWith("\"") && value.endsWith("\"")) ||
      (value.startsWith(singleQuote) && value.endsWith(singleQuote))
    ) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function initAdmin() {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  return initializeApp({
    credential: cert({
      projectId: requiredEnv("FIREBASE_PROJECT_ID"),
      clientEmail: requiredEnv("FIREBASE_CLIENT_EMAIL"),
      privateKey: requiredEnv("FIREBASE_PRIVATE_KEY").replace(/\\n/g, "\n"),
    }),
  });
}

async function promptForConfirmation(message) {
  const rl = createInterface({ input, output });
  const answer = await rl.question(`${message} Type YES to continue: `);
  rl.close();

  return answer.trim() === "YES";
}

async function writeAuditLog({ db, actor, targetUid, targetEmail, grantAdmin }) {
  await db.collection("adminAuditLog").add({
    action: grantAdmin ? "grant_admin" : "revoke_admin",
    targetUid,
    targetEmail,
    actor,
    source: "scripts/set-admin-claim.mjs",
    createdAt: FieldValue.serverTimestamp(),
  });
}

async function main() {
  loadDotEnvLocal();

  const [, , email, adminFlag, confirmFlag] = process.argv;
  if (!email || !adminFlag || !["true", "false"].includes(adminFlag)) {
    console.error(
      "Usage: node scripts/set-admin-claim.mjs <user-email> <true|false> --confirm",
    );
    process.exit(1);
  }

  if (confirmFlag !== "--confirm") {
    console.error(
      "Safety check failed: pass --confirm as the third argument to proceed.",
    );
    process.exit(1);
  }

  const isAdmin = adminFlag === "true";
  const confirmationMessage = `About to ${isAdmin ? "GRANT" : "REVOKE"} admin access for ${email}.`;
  const approved = await promptForConfirmation(confirmationMessage);

  if (!approved) {
    console.log("Operation cancelled.");
    process.exit(0);
  }

  initAdmin();
  const auth = getAuth();
  const db = getFirestore();
  const user = await auth.getUserByEmail(email);
  const whitelistRef = db.collection("adminWhitelist").doc(user.uid);

  if (isAdmin) {
    await whitelistRef.set({
      uid: user.uid,
      email: user.email ?? email,
      createdAt: FieldValue.serverTimestamp(),
    });
  } else {
    await whitelistRef.delete();
  }

  const actor =
    process.env.ADMIN_ACTOR_EMAIL ||
    process.env.GITHUB_ACTOR ||
    process.env.FIREBASE_CLIENT_EMAIL ||
    "unknown";

  await writeAuditLog({
    db,
    actor,
    targetUid: user.uid,
    targetEmail: user.email ?? email,
    grantAdmin: isAdmin,
  });

  console.log(`Updated admin whitelist for ${email}. allowed=${isAdmin}.`);
}

main().catch((error) => {
  if (error instanceof Error) {
    console.error(error.message);
    if (error.message.includes("Missing required env var")) {
      console.error(
        "Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in .env.local",
      );
      console.error(
        "Use a Firebase service account private key, not NEXT_PUBLIC Firebase values.",
      );
    }
  } else {
    console.error(error);
  }
  process.exit(1);
});
