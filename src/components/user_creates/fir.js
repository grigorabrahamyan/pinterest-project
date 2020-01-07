import firebase from './firebase';

const db = firebase.firestore();

export function topic( nameOfCategory = '' ,id ) {
    const topicData = db.collection('topics').doc(`${id}`);

    topicData.set({
        nameOfCategory,
    });
};