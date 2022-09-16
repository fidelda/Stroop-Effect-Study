import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDP-RGM2GoZyuKpQNKCxB-FIOfJVDMSMfo",
    authDomain: "cognitive-people.firebaseapp.com",
    databaseURL: "https://cognitive-people-default-rtdb.firebaseio.com",
    projectId: "cognitive-people",
    storageBucket: "cognitive-people.appspot.com",
    messagingSenderId: "178995537344", 
    appId: "1:178995537344:web:947b048cd023d737d49425"
  };

export const db = firebase.initializeApp(firebaseConfig).database()
