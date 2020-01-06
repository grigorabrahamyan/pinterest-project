import React, { useState, useEffect } from 'react';
import AppSignUp from './sign-up/app-sign-up';
import AppSignIn from './sign-in/app-sign-in';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './sign-in/sign-in';
import SignUp from './sign-up/sign-up';

function Login(props) {

    const{renderMainpanelTransitionModal, changeLoginStateTransitionModal} = props;

    const[signUp, setSignUp] = useState(false);

    const renderMainpanelLogin = () => {
        renderMainpanelTransitionModal();
    }
    
    useEffect(() => {
        renderMainpanelLogin();
    },[])

    const changeSignUpSignIn = () => {
        setSignUp(!signUp);
    }

    const changeSignUpState = () => {
        setSignUp(!signUp);
    }

    if (signUp) {
        return (
            <SignUp 
                changeSignUp = {changeSignUpState}
                changeLoginStateLogin = {changeLoginStateTransitionModal}
            />
        );
    }

    return (
        <>
            <SignIn 
                changeSignUpSignIn = {changeSignUpSignIn}
                changeLoginStateLogin = {changeLoginStateTransitionModal}
            />
        </>
    );
};

export default Login;

