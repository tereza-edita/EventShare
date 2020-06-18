import firebase from 'firebase/app';
import 'firebase/firestore';
import secret from './secret.js';

// Get a Firestore instance
const db = firebase
  .initializeApp(secret)
  .firestore();

export default db;