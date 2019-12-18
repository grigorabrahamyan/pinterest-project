import React from 'react';
import AppSignUp from './sign-up/app-sign-up';
import AppSignIn from './sign-in/app-sign-in';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function Login() {
    return (
        <Router>
            <Switch>
                <Route path = '/sign-up' >
                    <AppSignUp />
                </Route>
                <Route path = '/sign-in' >
                    <AppSignIn />
                </Route>
            </Switch>
        </Router>
    );
};

export default Login;

