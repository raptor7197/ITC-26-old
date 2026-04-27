import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const REQUIRED_FIREBASE_ENV_VARS = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
] as const;

function getMissingFirebaseEnvVars(): string[] {
  return REQUIRED_FIREBASE_ENV_VARS.filter(
    (key) => !process.env[key] || !process.env[key]?.trim(),
  );
}

/**
 * Strict in production, relaxed in development.
 * - Production: throw immediately for misconfiguration.
 * - Development: warn and allow app to boot so non-auth pages can still load.
 */
function validateFirebaseEnv() {
  const missing = getMissingFirebaseEnvVars();
  if (missing.length === 0) return;

  const message =
    `Missing required Firebase configuration: ${missing.join(", ")}. ` +
    "Define these NEXT_PUBLIC_FIREBASE_* variables in your environment (for local development, add them to .env.local).";

  if (process.env.NODE_ENV === "production") {
    throw new Error(message);
  }

  // Dev/preview ergonomics: warn instead of crashing immediately.
  console.warn(`[firebase] ${message}`);
}

validateFirebaseEnv();

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export { app, auth, googleProvider, storage };
