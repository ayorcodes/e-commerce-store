import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { AppConstants } from '.';

var firebaseConfig = {
  apiKey: AppConstants.FIREBASE_API_KEY,
  authDomain: AppConstants.FIREBASE_AUTH_DOMAIN,
  projectId: AppConstants.FIREBASE_PROJECT_ID,
  storageBucket: AppConstants.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: AppConstants.FIREBASE_MESSAGING_SENDER_ID,
  appId: AppConstants.FIREBASE_APP_ID,
  measurementId: AppConstants.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
