import React from "react";
import firebase from '../login/firebase/firebase'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TitlebarGridList from './Gridforfirspage'



const storage = firebase.storage();
const db = firebase.firestore();

var storageRef = storage.ref()

var imagesRef = storageRef.child('gs://pinteresttest-18063.appspot.com/Cars/cars 1.jpg');

console.log(imagesRef)




/////////////////////////////////////////////////////////////////
// let example = db.collection('users').doc(
//     'Nor Doc'
//     ).set({
//         name: "San Francisco", state: "CA", country: "USA",
//         capital: false, population: 860000,
//         regions: ["west_coast", "norcal"] })


// let nordoc = db.collection('users').doc(
//     'Nor Doc'
//     )

//     nordoc.get().then(function(doc) {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch(function(error) {
//         console.log("Error getting document:", error);
//     });
////////////////////////////////////////////////////////////////////////////////////////////

function firstpage() {
        return (
                <div>
                        <TitlebarGridList></TitlebarGridList>
                    <h1>AAAAAAAAAAAAAAAAAAAAA</h1>    //map
                    <img src={imagesRef} alt='nkar chka'/>
                    <img src={imagesRef} alt='nkar chka'/>
                    <img src={imagesRef} alt='nkar chka'/>
                    <img src={imagesRef} alt='nkar chka'/>
                    <img src={imagesRef} alt='nkar chka'/>
                    <img src={imagesRef} alt='nkar chka'/>
                    <img src={imagesRef} alt='nkar chka'/>
                    <img src={imagesRef} alt='nkar chka'/>
                    <img src={imagesRef} alt='nkar chka'/>
                    <img src={imagesRef} alt='nkar chka'/>
                    <img src={imagesRef} alt='nkar chka'/>
                    <img src={imagesRef} alt='nkar chka'/>

                </div>
        )
}

export default firstpage;
