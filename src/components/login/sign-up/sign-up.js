import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LinkMaterial from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControlLabelPosition from './form-control-label-position';
import checkPassword from '../validation/password-validation';
import validateEmail from '../validation/email-validation';
// import { signUpNewUsers } from '../firebase/func';
import {signUpNewUsersFirstStep} from '../firebase/func';
import SignUpStepTwo from '../ssign-up-step-two/sign-up-step-two';

export const useStyles = makeStyles(theme => ({
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {

  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const[isUserLoginFirstStep, setIsUserLoginFirstStep] = useState(false);

  const classes = useStyles();

  const handleChangeFirstName = useCallback(event => {
    setFirstname(event.target.value);
  }, []);

  const handleChangeLastName = useCallback(event => {
    setLastName(event.target.value);
  }, []);

  const handleChangeAge = useCallback(event => {
    setAge(event.target.value);
  }, []);

  const onChangeGender = useCallback(event => {
    setGender(event.target.value);
  }, []);

  const handleChangeEmail = useCallback(event => {
    setEmail(event.target.value);
    if (!validateEmail(event.target.value) && event.target.value.length) {
      setErrorEmail(true)
    } else {
      setErrorEmail(false)
    }
  }, []);

  const handleChangePassword = useCallback(event => {
    setPassword(event.target.value);
    checkPassword(event.target.value) ?
      setErrorPassword(checkPassword(event.target.value)) :
      setErrorPassword(false);
  }, []);

  const handleChangeConfirmPassword = useCallback(event => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setErrorConfirmPassword(true)
    } else {
      setErrorConfirmPassword(false)
    }
  }, [password]);

  const onClickButtonSignUp = useCallback((event) => {
    event.preventDefault();
    if (firstName.length && lastName.length && age.length && !errorEmail && !errorPassword && !errorConfirmPassword) {
      // signUpNewUsers(firstName, lastName, email, password, gender, age);
      signUpNewUsersFirstStep(email, password);
      setIsUserLoginFirstStep(true);
    }
    return null;
  }, [firstName, lastName, age, email, errorEmail, password, errorPassword, errorConfirmPassword]);

  if(isUserLoginFirstStep) {
    return (
      <SignUpStepTwo 
        firstName = {firstName}
        lastName = {lastName}
        gender = {gender}
        age = {age}
        email = {email}
        password = {password}
      />
    );
  };

  return (
    <>
      <Link to = '/sign-in' >
        <Button
          type="submit"
          // fullWidth
          variant="contained"
          color="primary"
          style={{
            position: 'absolute',
            marginLeft: '50px',
            marginTop: '50px'
          }}
        >
          Sign In
        </Button>
      </Link>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChangeFirstName}
                  value={`${firstName}`}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={handleChangeLastName}
                  value={`${lastName}`}
                />
              </Grid>
              <Grid item xs={12} >
                <FormControlLabelPosition
                  genderSignUp={gender}
                  onChangeGenderSignUp={onChangeGender} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="age"
                  type='number'
                  value={`${age}`}
                  onChange={handleChangeAge}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChangeEmail}
                  color={errorEmail && email.length ? 'secondary' : 'primary'}
                  error={errorEmail && email.length ? errorEmail : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handleChangePassword}
                  color={errorPassword && password.length ? 'secondary' : 'primary'}
                  error={errorPassword && password.length ? errorPassword : null}
                  helperText={errorPassword || password.length ? errorPassword : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirm password"
                  label="Confirm password"
                  type="password"
                  id="confirm password"
                  autoComplete="current-password"
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                  color={errorConfirmPassword && confirmPassword.length ? 'secondary' : 'primary'}
                  error={errorConfirmPassword && confirmPassword.length ? errorConfirmPassword : null}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onClickButtonSignUp}
            >
              next step
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to = '/sign-in' >
                  <LinkMaterial  href="#" variant="body2" >
                    Already have an account? Sign in
                  </LinkMaterial>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}