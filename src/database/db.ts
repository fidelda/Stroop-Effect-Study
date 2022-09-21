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
  db.ref('users/' + store.user.uid + '/user_data').set({
    device: store.user.device,
    concentration_before: store.user.concentration_before,
    concentration_after: store.user.concentration_after,
    age_group: store.user.age_group,
    dyslexia: store.user.dyslexia,
    dyscalculia: store.user.dyscalculia,
    study_group: store.user.study_group
  });
  const letters = store.user.letters;
  for (let i = 0; i < letters.size; i++) {
    const letterData = letters.get(i);
    db.ref('users/' + store.user.uid + '/letters/letter_id_' + i).set({
      correct_img: letterData.correct_img,
      clicked_img: letterData.clicked_img,
      is_user_right: letterData.is_user_right,
      time: letterData.time
    });
  } 

}