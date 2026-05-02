import {
  initializeApp,
  getApps,
  getApp,
  type FirebaseApp,
} from "firebase/app";
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _storage: FirebaseStorage | null = null;
let _googleProvider: GoogleAuthProvider | null = null;

function initApp(): FirebaseApp | null {
  if (typeof window === "undefined") return null;
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) return null;
  if (!_app) {
    _app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  }
  return _app;
}

export function getFirebaseApp(): FirebaseApp | null {
  return initApp();
}

export function getFirebaseAuth(): Auth | null {
  if (typeof window === "undefined") return null;
  if (!_auth) {
    const a = initApp();
    _auth = a ? getAuth(a) : null;
  }
  return _auth;
}

export function getFirebaseStorage(): FirebaseStorage | null {
  if (typeof window === "undefined") return null;
  if (!_storage) {
    const a = initApp();
    _storage = a ? getStorage(a) : null;
  }
  return _storage;
}

export function getGoogleProvider(): GoogleAuthProvider | null {
  if (typeof window === "undefined") return null;
  if (!_googleProvider) {
    _googleProvider = initApp() ? new GoogleAuthProvider() : null;
  }
  return _googleProvider;
}
