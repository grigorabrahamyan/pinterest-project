import React, { useState, useEffect } from 'react';
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
import Popup from "reactjs-popup";
import {db} from './components/login/firebase/func'

function App() {

  // signout();

  const[isLogin, setIsLogin] = useState(false);
  const[logIn, setlogIn] = useState(0);
  const[signUpStepTwo, setSignUpStepTwo] = useState(false);
  const[isTopics, setIsTopics] = useState(false);

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

<<<<<<< HEAD
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
=======
  function changeLoginState() {
    setlogIn(0);
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
          if(user) {
            setIsLogin(true);
          }
      })
  }, [isLogin]);

  if(logIn === 4) {
    return(

      <TransitionsModal
        renderMainpanelApp = {renderMainPanelTrue}
        changeLoginStateApp = {changeLoginState}
      />
      
      // <div className = 'modal' >
      //   <Login 
      //     renderMainpanelApp = {renderMainPanelTrue}
      //     renderMainPannelFalseApp = {renderMainPanelFalse}
      //     changeLoginStateApp = {changeLoginState}
      //   />
      // </div>
    );
  };

  return (
    (<div onClick = {!isLogin && changeLoginThreeTimes} >
        <Header 
          topics = {isTopics}
          chnageTopicsBoxApp = {changeTopicsBox}
          // step = {signUpStepTwo}
        />
        <div
          onClick = {checkTopicsBox} 
        >
          <Main />
          <TransitionsTooltips />
        </div>
    </div>)
>>>>>>> 7487725cbe6f3c19cdfe4ebd816cb681c73db6de
  );
};

export default App;