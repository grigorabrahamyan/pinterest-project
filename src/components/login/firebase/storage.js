import firebase from './firebase';

const storage = firebase.storage();
const storageRef = storage.ref();
const imagesRef = storageRef.child('images');
const spaceRef = storageRef.child('images/space.jpg');