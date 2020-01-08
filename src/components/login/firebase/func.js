import firebase from './firebase';

export const db = firebase.firestore();
export const storage = firebase.storage();
// <<<<<<< HEAD
// =======

// >>>>>>> 8b30580e759e2daff5df5e3f8a5bf66e9a7fe100


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

export function checkUserLogInOrNot() {
    firebase.auth().onAuthStateChanged(function(user) {
        if(user) {
            db.collection("users").doc(`${user.uid}`).get().then((doc) => {
                return doc.data();
            });
        } else {
            return `There aren't users!`;
        }
    })
};

export function signout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
    });
};

export function signUpNewUser(firstName = '', lastName = '', email = '', password = '', gender = '', age = '', topicId = []) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            if (user) {
                const addUser = db.collection("users").doc(`${user.user.uid}`);
                addUser.set({
                    firstName,
                    lastName,
                    email,
                    password,
                    gender,
                    age,
                    topicId
                });
            } else {
                console.log(`There isn't user...`);
            }
        })
        .catch(function(error) {
        console.log(`Error-message : ${error.message}`);
    });
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