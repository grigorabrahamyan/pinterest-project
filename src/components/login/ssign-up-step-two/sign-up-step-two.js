import React, {useEffect, useState, useMemo} from 'react';
import Typography from '@material-ui/core/Typography';
import './sign-up-step-two.css';
import firebase from '../firebase/firebase';
import Item from './item';
import Button from '@material-ui/core/Button';
import {useStyles} from '../sign-up/sign-up';
import {signUpNewUsersFinish} from '../firebase/func';

const db = firebase.firestore();

async function getTopics() {
    const data = await db.collection('topics').get();
    return data;
};

function SignUpStepTwo(props) {

    const{firstName, lastName, gender, age, email, password} = props;

    const classes = useStyles();

    const[topics, setTopics] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const[userTopicsId, setUsersTopicsId] = useState([]);

    function getUsersTopicsId(id){
        if (!userTopicsId.includes(id)) {
            setUsersTopicsId([...userTopicsId, id]);
        } else {
            const index = userTopicsId.indexOf(id);
            setUsersTopicsId(userTopicsId.filter((item) => item !== userTopicsId[index]));
        }
    }

    const topicsCount = useMemo(() => 5 - userTopicsId.length, [userTopicsId]);

    useEffect(()=> {
        const arr = [];
        setIsLoading(true);
        getTopics().then(res => {
            res.forEach(item => {
                arr.push({
                    avatarUrl: item.data().avatarUrl,
                    nameOfCategory: item.data().nameOfCategory,
                    id: item.id, })
            });
            setTopics(arr);
            setIsLoading(false);
        });
    },[]);

    function signUpStepTwoFinish(){
        if (userTopicsId.length > 4) {
            signUpNewUsersFinish(firstName, lastName, email, password, gender, age, userTopicsId);
        };
    };

    return (
        <div className = 'container' >
            <Typography
                variant = 'h4'
                align = 'center'
            >
                Tell about your interests...
            </Typography>
            <div className = 'middle-div' ></div>
            <div className = 'items' >
                { isLoading ? <h3>Loading...</h3> : topics.map( (item) => {
                    return(
                    <Item
                        urlImg = {item.avatarUrl}
                        name = {item.nameOfCategory}
                        id = {item.id}
                        getTopicIdSignUpStep = {getUsersTopicsId}
                    /> );
                })}
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {signUpStepTwoFinish}
            >
            {userTopicsId.length < 5 ?
                `You must choose minimum ${topicsCount} topics` : 
                `Now you can sign-up`
            }
            </Button>
        </div>
    );
};

export default SignUpStepTwo;