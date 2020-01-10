import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import UserLayout from "./hoc/Layout/userLayout";
import DefaultLayout from "./hoc/Layout/defaultLayout";
import User from "./components/user";
import Header from './components/header-two/index';
import Main from './components/main/index';
import TransitionsTooltips from './components/footer/index';
import Login from './components/login/index';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import firebase from './components/login/firebase/firebase';
import {signout} from './components/login/firebase/func';
import TransitionsModal from './components/login/modal/sign-in-modal';
import {db} from './components/login/firebase/func'
import GetArr from './components/First page/Firstpage'
//import GetArr from './components/First page/Firstpagecopy'

function App() {

  const[isLogin, setIsLogin] = useState(false);
  const[logIn, setlogIn] = useState(0);
  const[signUpStepTwo, setSignUpStepTwo] = useState(false);
  const[isTopics, setIsTopics] = useState(false);
  const[signUp, setSignUp] = useState(false);

  function checkTopicsBox() {
    setIsTopics(false);
  }

  function changeTopicsBox() {
    setIsTopics(true);
  }

  function renderMainPanelTrue() {
    setSignUpStepTwo(true);
  }

  function renderMainPanelFalse() {
    setSignUpStepTwo(false);
  }

  function changeLoginThreeTimes() {
    setlogIn(logIn + 1);
  }

 
  // if(logIn > 3) {
  //     return(
  //       <Login />
  //     );
  // }

    return (
        <div onClick={changeLoginThreeTimes}>
            <Header/>
            <Main/>
            <TransitionsTooltips/>
        </div>
    )
  function changeLoginState() {
    setlogIn(0);
  }

  const changeLoginFour = useCallback(() => {
    setlogIn(4);
    console.log('Privet');
  }, []);

  const changeSignUp = () => {
    setSignUp(!signUp);
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
          if(user) {
            setIsLogin(true);
          }
      })
  }, [isLogin]);

  // if(logIn === 4) {
  //   return(
  //     <TransitionsModal
  //       signUp = {signUp}
  //       changeSignUpApp = {changeSignUp}
  //       renderMainpanelApp = {renderMainPanelTrue}
  //       changeLoginStateApp = {changeLoginState}
  //     />
  //   );
  // };

  return (
    (<div onClick = {!isLogin && changeLoginThreeTimes} >
        <Header
          // changeSignUpApp = {changeSignUpTransitionsModal}
          changeLoadingApp = {changeLoginFour}
          topics = {isTopics}
          chnageTopicsBoxApp = {changeTopicsBox}
          // step = {signUpStepTwo}
        />
        <div
          onClick = {checkTopicsBox}
        >
          <Main />
          <GetArr/>

          <TransitionsTooltips />
        </div>
        <div onClick = {changeLoginThreeTimes} >
        <Header/>
        <div>
          <h1>HELLO! It is Footer</h1>
        </div>

        
      </div>
    </div>)

   
  );
};

export default App;
