import React, {useState, useEffect} from 'react';
import "./Pinterest.css";
import AddIcon from "@material-ui/icons/Add";
import classes from "./UseStyles";
import firebase from '../login/firebase/firebase';
import { topic } from './fir';
import {db, storage} from "../login/firebase/func"


async function getTopics() {
    const data = await db.collection('topics').get();
    return data;
};

async function getUserTopicsId() {
    const user = await firebase.auth().currentUser;
    return user;
}


const Topics = () => {
            const [follow1, setFollow1] = useState(true);
            const [follow2, setFollow2] = useState(true);
            const [follow3, setFollow3] = useState(true);
            const [follow4, setFollow4] = useState(true);
            const[topics, setTopics] = useState([]);



// useEffect(()=> {
//     const arr = [];
//     db.collection("topics").get().then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // console.log(doc.id, " => ", doc.data().avatarUrl);
//             // arr.forEach(element => arr.push(element));
//             // arr.push(doc.data().avatarUrl);
//             // arr.push(doc.data().nameOfCategory);
            
//                 arr.push(doc.data().avatarUrl)
//              let array = arr.splice(0,36)
//             // if(doc.data().avatarUrl.lenght === 36){
//             //     arr.push(doc.data().avatarUrl)
//             // }
//                 console.log(array.length)
//         });
//         // setTopics(arr)
//     });
// })

useEffect(()=> {
    const arr = [];
    getTopics().then(res => {
        res.forEach(item => {
            arr.push({
                avatarUrl: item.data().avatarUrl,
                nameOfCategory: item.data().nameOfCategory,
                id: item.id, })
        });
        console.log(arr)
        setTopics(arr);
    });
},[]);

getUserTopicsId().then(user => {
    if (user) {
        const getUser = db.collection("users").doc(`${user.uid}`);
        getUser.get().then(doc => console.log(doc.data().topicId));
    }
})

    return (
      
        <div className="topics">

             {/* <div className="divtopics">
                <button className="buttontop">
                    <img className="topics_img" src="https://wallpaperaccess.com/full/87755.jpg"/>
                    <span className="picsCategory"> Nature</span>
                </button>
                {  follow1 ?    <button className="category" onClick={() => setFollow1(false)}>Follow</button>:
                    <button className="category" onClick={() => setFollow1(true)}>Following</button>
                }
            </div>  */}




              

            <div className = 'items' >
                { topics.map( (item) => {
                    return(
                    <div>
                        <img  className="topics_img" src={item.avatarUrl}/> 
                       <span>{item.nameOfCategory}</span>
                        {/* id = {item.id} */}
                    </div> );
                })}
            </div>



            {/* <div className="divtopics">
                <button className="buttontop">
                    <img className="topics_img"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4ujBj5z-nzJmS262khrcf93rrBq8Y8jP8dNhPg03ztFKtBkJ2"/>
                    <span className="picsCategory"> Animals</span>
                </button>
                {  follow2 ?    <button className="category" onClick={() => setFollow2(false)}>Follow</button>:
                    <button className="category" onClick={() => setFollow2(true)}>Following</button>
                }
            </div> */}





            {/* <div className="divtopics">
                <button className="buttontop">
                    <img className="topics_img"
                         src="https://www.hollywoodhalfwits.com/wp-content/uploads/2019/08/41.jpg"/>
                    <span className="picsCategory"> Cars</span>
                </button>
                {  follow3 ?    <button className="category" onClick={() => setFollow3(false)}>Follow</button>:
                    <button className="category" onClick={() => setFollow3(true)}>Following</button>
                }
            </div>

            <div className="divtopics">
                <button className="buttontop">
                    <img className="topics_img"
                         src="data:image/jpeg;base64,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"/>
                    <span className="picsCategory"> Sport</span>
                </button>
                {  follow4 ?    <button className="category" onClick={() => setFollow4(false)}>Follow</button>:
                    <button className="category" onClick={() => setFollow4(true)}>Following</button>
                }
            </div> */}

            
        </div>
    )
}
export default Topics