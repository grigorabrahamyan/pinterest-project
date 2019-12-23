import React, {Fragment} from 'react';
import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Firstpage from './components/First page/Firstpage'

function App() {
  return (
      <Fragment>
        <Header/>
        <Firstpage/>
        <Main/>
        <Footer/>
      </Fragment>
  );
}

export default App;
