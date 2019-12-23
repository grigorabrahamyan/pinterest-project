import firebase from './firebase';

const db = firebase.firestore();
const storage = firebase.storage();


export function topics( nameOfCategory = '' ,id ) {
    const topicData = db.collection('topics').doc(`${id}`);

    topicData.set({
        nameOfCategory,
    });
};

export function images( src = '' ,id ) {
    const imageData = db.collection('images').doc(`${id}`);

    imageData.set({
        src,
    });
};

export function signUpNewUsers( firstName = '', lastName = '', email = '', password = '', gender = '', age = '' ) {
    console.log(firebase.auth());
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        firebase.auth().onAuthStateChanged(function(user) {
                const userData = db.collection('users').doc(`${user.uid}`);
                userData.set({
                    firstName,
                    lastName,
                    email,
                    password,
                    gender,
                    age,
                });
          });
    }).then(() => console.log('Everything is ok!')).catch((error) => console.log(error.message));
};

export function signInExistingUsers(email = '', password = '') {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export function signOutExistingUsers() {
    firebase.auth().signOut().then(function(user) {
        console.log(user);
        console.log('Sign-out successful.');
      }).catch(function(error) {
        console.log( error );
        console.log(error.message);
      });
};

export function boards( boardName = '', userId = '', id = '' ) {
    const boardsUserData = db.collection('user-boards').doc(`${id}`);

    boardsUserData.set({
        boardName,
        userId: `${userId}`,
    });
};

export function topicsImagesMap( topicId = '', imageId = '', id = '' ) {
    const topicsImages = db.collection('topics-images').doc(`${id}`);

    topicsImages.set({
        topicId: `${topicId}`,
        imageId: `${imageId}`,
    });
};

export function boardsImagesMap( boardId = '', imageId = '', id = '' ) {
    const boardsImages = db.collection('boards-images').doc(`${id}`);

    boardsImages.set({
        boardId: `${boardId}`,
        imageId: `${imageId}`,
    });
};

export function topicsUsersMap( topicId = '', userId = '', id = '' ) {
    const topicsUsers = db.collection('topics-users').doc(`${id}`);

    topicsUsers.set({
        topicId: `${topicId}`,
        userId: `${userId}`,
    });
};

