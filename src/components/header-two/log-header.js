import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../login/firebase/firebase';
import {db} from '../login/firebase/func';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SearchBox from './search-two';
import UserCreates from "../user_creates";
import UserSettingsLayout from "../../hoc/Layout/userSettingsLayout";
import AccountSettings from "../user/AccountSettings/AccountSettingsInformation";
import EditProfile from "../user/EditProfile/editProfile";
import Home from "../home";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />
);

function LogHeader({step, topics, changeTopicsBoxHeader}) {

    const[login, setLogin] = useState([
        `home`,
        `login`,
        `register`
    ]);

    useEffect(() => {
        if(firebase.auth().currentUser) {
            db.collection("users").doc(`${firebase.auth().currentUser.uid}`).get().then((doc) => {
                setLogin([
                    `home`,
                    `my creates`,
                    [`${doc.data().firstName}`, [`account settings`, `edit profiler`, `logout`]]
                ]);
            })
        }
    }, [firebase.auth().currentUser]);

    const classes = useStyles();

    return (
    <Router>
        <header className = 'header' >
            <div className = 'img-logo-header' >
                <Link to="/">
                    <img className = 'img-logo-header' src = 'https://firebasestorage.googleapis.com/v0/b/pinteresttest-18063.appspot.com/o/pinterest-logo.png?alt=media&token=52ebcb0e-9267-4f30-9f17-6ffac21ff2c1' alt = 'Logo' />
                </Link>
            </div>
            <div className = 'search-input' >
                {/* <Autocomplete
                    options={top100Films}
                    getOptionLabel={option => option.title}
                    renderInput={params => (
                        <TextField
                        variant="outlined"
                        fullWidth = 'true'
                        name="search"
                        placeholder = 'Search'
                        type="search"
                        id="search"
                        {...params} 
                        label="Search information..." 
                        variant="outlined" 
                        fullWidth />
                    )}
                /> */}
            {/* <ComboBox /> */}
            <SearchBox 
                topics = {topics}
                chnageTopicsBoxLogHeader = {changeTopicsBoxHeader}
            />
            </div>
            <nav className = 'navbar-header' >
                <div className = 'navbar-header-items' >
                    <div className = 'header-nav-items' >
                        {
                            login.map((item) => {
                                if (Array.isArray(item)) {
                                    return (
                                        <Button
                                            className = 'nav-items-item'
                                            size="large"
                                            className={classes.margin}
                                        >
                                            {`${item[0]}`}
                                            {/* <InputLabel id="demo-simple-select-outlined-label">
                                                {item[0]}
                                            </InputLabel> */}
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={`age`}
                                                // labelWidth={labelWidth}
                                            >
                                                <MenuItem value={10}>
                                                    <Link
                                                        to="/user/account_settings/">
                                                        {item[1][0]}
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                    <Link
                                                        to="/user/edit_profile/">
                                                        {item[1][1]}
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem value={30}>
                                                    {item[1][2]}
                                                </MenuItem>
                                            </Select>
                                        </Button>
                                    );
                                }
                                {
                                    if (item === "home") {
                                        return( <Button
                                                className = 'nav-items-item'
                                                size="large"
                                                className={classes.margin}
                                            >
                                                <Link to="/">
                                                    {`${item}`}
                                                </Link>
                                            </Button>
                                        )
                                    }
                                    if (item === "my creates") {
                                        return( 
                                            <Button
                                                className = 'nav-items-item'
                                                size="large"
                                                className={classes.margin}
                                            >
                                                <Link to="/user/user_creates">
                                                    {`${item}`}
                                                </Link>
                                            </Button>
                                        )
                                    }
                                }
                                return (
                                    <Button
                                        className = 'nav-items-item'
                                        size="large"
                                        className={classes.margin}
                                    >
                                        <Link to="/user/user_creates">
                                            {`${item}`}
                                        </Link>
                                    </Button>
                                );
                             })
                        }
                        {/* <Button 
                            size="large"
                            className={classes.margin}
                        >
                            home
                        </Button>
                    </div  >
                    <div className = 'header-nav-items' >
                        <Button 
                            size="large"
                            className={classes.margin}
                        >
                            login
                        </Button>
                    </div>
                    <div className = 'header-nav-items' >
                        <Button
                            size="large"
                            className={classes.margin}
                        >
                            register
                        </Button> */}
                    </div>
                </div>
            </nav>
        </header>
        <Switch>
            <Route path="/user/user_creates">
                <UserCreates />
            </Route>
            <AppRoute exact path="/user/account_settings" layout={UserSettingsLayout} component={AccountSettings} />
            <AppRoute exact path="/user/edit_profile" layout={UserSettingsLayout} component={EditProfile} />

            <Route
                exact
                path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
    );
};

export default LogHeader;