function shortPasswordValidate(input) {

    if (input === '') {
        return null;
    }

    if ( input.includes(' ')) {
        return 'Password don`t contain parabel';
    }

    if ( input.length < 8 ) {
        return 'Short password';
    }

    return null;
  }

  export default shortPasswordValidate;