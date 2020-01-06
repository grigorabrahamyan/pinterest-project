import React, { useState } from 'react';
import './App.css';
import UserLayout from "./hoc/Layout/userLayout";
import DefaultLayout from "./hoc/Layout/defaultLayout";
import User from "./components/user";
import Header from './components/header/index';
import Main from './components/main/index';
import TransitionsTooltips from './components/footer/index';
import Login from './components/login/index';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import GetArr from './components/First page/Firstpage'

export default function App() {

  const[logIn, setlogIn] = useState(0);

  function changeLoginThreeTimes() {
    setlogIn(logIn + 1);
  }

  if(logIn > 3) {
      return(
        <Login />
      );
  }

  return (
      <div onClick = {changeLoginThreeTimes} >
        <Header/>
        <GetArr/>
        <div>
          <h1>HELLO! It is Footer</h1>
        </div>

        
      </div>
  );
    // return (
    //     <>
    //         {
    //             (User.isAuthorised) ?
    //                 (
    //                     <UserLayout>

    //                     </UserLayout>
    //                 )
    //                 : (
    //                     <DefaultLayout>

    //                     </DefaultLayout>
    //                 )
    //         }
    //     </>
    // )
};