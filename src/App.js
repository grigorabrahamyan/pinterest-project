import React, { useState } from 'react';
import './App.css';
<<<<<<< HEAD
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Firstpage from './components/First page/Firstpage'
=======
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
>>>>>>> cba07095bc29d7d0af096f187bc859f80f7805d0

  return (
      <div onClick = {foo} >
        <Header/>
<<<<<<< HEAD
        <Firstpage/>
        <Main/>
        <Footer/>
      </Fragment>
=======
        <Main />
        <TransitionsTooltips/>
      </div>
>>>>>>> cba07095bc29d7d0af096f187bc859f80f7805d0
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