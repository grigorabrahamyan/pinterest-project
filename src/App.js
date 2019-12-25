import React, { useState } from 'react';
import './App.css';
import UserLayout from "./hoc/Layout/userLayout";
import DefaultLayout from "./hoc/Layout/defaultLayout";
import User from "./components/user";
import Header from './components/header/index';
import Main from './components/main/index';
import TransitionsTooltips from './components/footer/index';
import Login from './components/login/index';

export default function App() {

  const[logIn, setlogIn] = useState(false);

  function foo() {
    console.log('privet Armenia')
    setlogIn(true);
  }

  if(logIn) {
      return(
          <Login />
      );
  }

  return (
      <div /*onClick = {foo}*/ >
        <Header/>
        <Main />
        <TransitionsTooltips/>
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