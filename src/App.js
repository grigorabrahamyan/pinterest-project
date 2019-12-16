import React, {Fragment} from 'react';
import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
      <Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </Fragment>
  );
}

export default App;
