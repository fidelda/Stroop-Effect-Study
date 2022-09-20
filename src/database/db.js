import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
import { useUserStore } from '../stores/users';

const firebaseConfig = {
    apiKey: "AIzaSyDP-RGM2GoZyuKpQNKCxB-FIOfJVDMSMfo",
    authDomain: "cognitive-people.firebaseapp.com",
    databaseURL: "https://cognitive-people-default-rtdb.firebaseio.com",
    projectId: "cognitive-people",
    storageBucket: "cognitive-people.appspot.com",
    messagingSenderId: "178995537344", 
    appId: "1:178995537344:web:947b048cd023d737d49425"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeUserData(uid, device, concentration, age_group, dyslexia, dyscalculia) {
  set(ref(db, 'users/' + uid), {
    device: device,
    concentration: concentration,
    age_group: age_group,
    dyslexia: dyslexia,
    dyscalculia: dyscalculia
  });
}

export function writeUserDataFromStore() {
  const store = useUserStore();
  writeUserData(
    store.user.uid,
    store.user.device,
    store.user.concentration,
    store.user.age_group,
    store.user.dyscalculia,
    store.user.dyscalculia
  )
}