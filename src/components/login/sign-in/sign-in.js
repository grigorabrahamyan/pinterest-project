import React, {useState, useCallback} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LinkMaterial from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import shortPasswordValidate from '../validation/short-password-validation';
import validateEmail from '../validation/email-validation';
import {signInExistingUsers} from '../firebase/func';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {

  const{changeSignUpSignIn, changeLoginStateLogin} = props;

  const[email, setEmail] = useState('');
  const[errorEmail, setErrorEmail] = useState(false);
  const[password, setPassword] = useState('');
  const[errorPassword, setErrorPassword] = useState(false);
  const[error, setError] = useState(null);

  const classes = useStyles();

  const handleChangeEmail = useCallback((event) => {
    setEmail(event.target.value);
    if (!validateEmail(event.target.value) && event.target.value.length) {
        setErrorEmail(true)
    } else {
        setErrorEmail(false)
    }
  }, []);

  const handleChangePassword = useCallback((event) => {
    setPassword(event.target.value);
    shortPasswordValidate(event.target.value) ? setErrorPassword(shortPasswordValidate(event.target.value)) : setErrorPassword(false);
}, []);

const changeSignUp = () => {
  changeSignUpSignIn();
}

  const handleOnClickSignIn =  useCallback((event) => {
    event.preventDefault();
    if ( errorEmail || errorPassword || !email.length || !password.length ) {
        return null;
    }
      changeLoginStateLogin();
      signInExistingUsers(email, password).then(res => console.log(res)).catch((error) => {
          console.log(error.message);
          if ( error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' ) {
            setError('Invalid email or password');
          } else if (error.code === 'auth/too-many-requests') {
            setError('Too many unsuccessful login attempts. Please try again later.')
          }
      });
    setEmail('');
    setPassword('');
}, [email, password, errorEmail, errorPassword]);

const disappearError = useCallback(() => {
  error && setError(null)
},[error]);

  return (
    <>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper} >
          <Typography component="h1" variant="h5" >
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value = {email}
              onChange = {handleChangeEmail}
              color = {errorEmail && email.length ? 'secondary' : null || error ? 'secondary' : 'primary'}
              error = {errorEmail && email.length ? errorEmail : null || error ? error : null}
              helperText = {error ? error : null}
              onBlur = {disappearError}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value = {password}
              onChange = {handleChangePassword}
              color = {errorPassword && password.length ? 'secondary' : null || error ? 'secondary' : 'primary'}
              error = {errorPassword && password.length ? errorPassword : null || error ? error : null}
              helperText = { errorPassword || password.length ? errorPassword : false}
              onBlur = {disappearError}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleOnClickSignIn}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <LinkMaterial 
                  href="#" 
                  variant="body2"
                  onClick = {changeSignUp}
                  // onClick = {}
                >
                  {"Don't have an account? Sign Up"}
                </LinkMaterial>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}

export default SignIn;