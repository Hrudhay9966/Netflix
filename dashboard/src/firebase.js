import firebase from "firebase/compat";
const firebaseConfig = {
  apiKey: "AIzaSyBLygfSdIdiMVFqO3vEwu4_Y9ln5giWUag",
  authDomain: "mernnetflix-7d214.firebaseapp.com",
  projectId: "mernnetflix-7d214",
  storageBucket: "mernnetflix-7d214.appspot.com",
  messagingSenderId: "424776890235",
  appId: "1:424776890235:web:421c3decc00af5b306afde",
  measurementId: ""
};
  firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;