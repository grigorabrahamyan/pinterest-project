import React, { useState, useEffect } from 'react';
import AppSignUp from './sign-up/app-sign-up';
import AppSignIn from './sign-in/app-sign-in';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './sign-in/sign-in';
import SignUp from './sign-up/sign-up';

function Login(props) {

    const{renderMainpanelTransitionModal, changeLoginStateTransitionModal, chnageSignUpTransitionsModal, signUp} = props;

    const renderMainpanelLogin = () => {
        renderMainpanelTransitionModal();
    }
    
    useEffect(() => {
        renderMainpanelLogin();
    },[])

    function changeSignUpLogin() {
        chnageSignUpTransitionsModal();
    }

    if (signUp) {
        return (
            <SignUp
                changeSignUpSignUp = {changeSignUpLogin}
                changeLoginStateLogin = {changeLoginStateTransitionModal}
            />
        );
    }

    return (
        <>
            <SignIn
                changeSignUpSignIn = {changeSignUpLogin}
                changeLoginStateLogin = {changeLoginStateTransitionModal}
            />
        </>
    );
};

export default Login;

