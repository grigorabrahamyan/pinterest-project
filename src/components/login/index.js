import React, { useState } from 'react';
import AppSignUp from './sign-up/app-sign-up';
import AppSignIn from './sign-in/app-sign-in';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './sign-in/sign-in';
import SignUp from './sign-up/sign-up';

function Login() {

    const[signUp, setSignUp] = useState(false);

    const changeSignUpSignIn = () => {
        setSignUp(!signUp);
    }

    if (signUp) {
        return (
            <SignUp />
        );
    }

    return (
        <>
            {/* <AppSignUp /> */}
            <SignIn 
                changeSignUpSignIn = {changeSignUpSignIn}
            />
        </>
    );
};

export default Login;

