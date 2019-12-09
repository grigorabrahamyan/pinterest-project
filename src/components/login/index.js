import React, {Component} from 'react';

import Button from './Button'
import SignUp from './Signup';
import Dialog from './Dialog';
import Dialog2 from './Dialog2';






class App extends Component {
  state = {
    signIn: false,
    email: '',
    password: '',
    errorforSignIn: false,
  }



// validation = () => {
//   const re = /\S+@\S+\.\S+/;
//   if(re.test(this.state.email)){
//     this.setState({errorforSignIn: false})
//   }
// }


  loginHandler = (event) => {
    this.setState({email: event.target.value}) 
    console.log(event.target.value)
  }

 



  signInButtonHandler = (event) => {
    console.log(this.state.email)
  }

  

  buttonClickHandler = (event) => {
    event.preventDefault();
   return this.setState({signIn: !this.state.signIn})
  }

  render(){
    // const validator = require("email-validator");
    // if (validator.validate(this.state.email)) {
    //  this.setState({errorforSignIn: true})
    //  }; // true

  
    let classButton=null;
    if (this.state.signIn) {
        classButton = 'Sign In'
    } else { classButton='Sign Up'}
  if (this.state.signIn){ return (
    <div className="App">
      <Button click={this.buttonClickHandler} name={classButton}></Button>
      
      <Dialog2> 
       <SignUp>

       </SignUp>
       </Dialog2>
    </div>
  )} else {
    return (
      <div className="App">
        <Button click={this.buttonClickHandler} name={classButton}></Button>
        
        <Dialog 
        inputLogin={this.loginHandler} 
        signInButton1={this.signInButtonHandler}
        errorforSignIn={this.state.errorforSignIn}>
        
         </Dialog>
         </div>
    )}
  }
}

export default App;
