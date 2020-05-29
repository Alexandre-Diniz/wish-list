import * as firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAYatAPqN60PuSIHTUtO3j0FrgeAbFRXYM",
  authDomain: "acompanhamentodeprojetos-d957e.firebaseapp.com",
  databaseURL: "https://acompanhamentodeprojetos-d957e.firebaseio.com",
  projectId: "acompanhamentodeprojetos-d957e",
  storageBucket: "acompanhamentodeprojetos-d957e.appspot.com",
  messagingSenderId: "3230024886",
  appId: "1:3230024886:web:ede9322757460a53875217",
  measurementId: "G-J9Y77E4H2E"
};

firebase.initializeApp(firebaseConfig)

export const dbh = !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();