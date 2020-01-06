import React, { useState } from 'react';
import SignIn from './sign-in/sign-in';
import SignUp from './sign-up/sign-up';

function Login() {

    const[signUp, setSignUp] = useState(false);

    const changeSignUpSignIn = () => {
        setSignUp(!signUp);
    }

    const changeSignUpState = () => {
        setSignUp(!signUp);
    }

    if (signUp) {
        return (
            <SignUp changeSignUp = {changeSignUpState} />
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

