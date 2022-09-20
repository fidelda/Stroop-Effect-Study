import firebase from 'firebase/app';
import "firebase/database";
import { useUserStore } from '@/stores/users';

const firebaseConfig = {
    apiKey: "AIzaSyDP-RGM2GoZyuKpQNKCxB-FIOfJVDMSMfo",
    authDomain: "cognitive-people.firebaseapp.com",
    databaseURL: "https://cognitive-people-default-rtdb.firebaseio.com",
    projectId: "cognitive-people",
    storageBucket: "cognitive-people.appspot.com",
    messagingSenderId: "178995537344", 
    appId: "1:178995537344:web:947b048cd023d737d49425"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.database();

export function writeUserDataFromStore() {
  const store = useUserStore();
  db.ref('users/' + store.user.uid,).set({
    device: store.user.device,
    concentration: store.user.concentration,
    age_group: store.user.age_group,
    dyslexia: store.user.dyslexia,
    dyscalculia: store.user.dyscalculia,
    study_group: store.user.study_group
  });
}