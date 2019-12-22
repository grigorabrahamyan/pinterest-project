import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDrUL7qbX0T0oqd3ZfHEg9l_-CXL-L4jjY",
  authDomain: "pinteresttest-18063.firebaseapp.com",
  databaseURL: "https://pinteresttest-18063.firebaseio.com",
  projectId: "pinteresttest-18063",
  storageBucket: "pinteresttest-18063.appspot.com",
  messagingSenderId: "987101088927",
  appId: "1:987101088927:web:049d72e1543aa62a2026aa",
  measurementId: "G-H82SXCL629"
};

firebase.initializeApp(firebaseConfig);

export default firebase;