function checkPassword(input) {
    const checkNumber = /(?=.*?[0-9])/;
    const checkUperCase = /(?=.*?[A-Z])/;

    if (input === '') {
        return null;
    }

    if ( input.includes(' ')) {
        return 'Password don`t contain parabel';
    }

    if (!input.match(checkUperCase)) {
        return 'Add uppercase letter'
    }

    if (!input.match(checkNumber)) {
        return 'Add numbers';
    }

    if ( input.length < 8 ) {
        return 'Short password';
    }

    return null;
  }

  export default checkPassword;