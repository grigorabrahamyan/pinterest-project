import firebase from "../../login/firebase/firebase";

export const db = firebase.firestore();
export const storage = firebase.storage();


/*
export function changeuserData( userId = '', userNewData = []) {
    const userData = db.collection('users').doc(`${userId}`);
}

// Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('images/mountains.jpg');*/
