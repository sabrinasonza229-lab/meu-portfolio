import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Só conecta se as chaves do .env.local existirem
export const firebaseConfigurado = Boolean(config.apiKey && config.projectId);

let banco = null;

if (firebaseConfigurado) {
  // getApps().length evita iniciar o Firebase duas vezes
  const app = getApps().length ? getApp() : initializeApp(config);
  banco = getFirestore(app);
}

export const db = banco;
