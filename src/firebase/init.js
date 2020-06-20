import firebase from 'firebase/app';
import secret from '../secret';

const firebaseApp = firebase.initializeApp(secret);

export default firebaseApp;