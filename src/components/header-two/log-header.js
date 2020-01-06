import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';
import firebase from '../login/firebase/firebase';
import {db} from '../login/firebase/func';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import {signInExistingUsers} from '../login/firebase/func';
import ComboBox from './search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchBox from './search-two';
import UserCreates from "../user_creates";
import UserSettingsLayout from "../../hoc/Layout/userSettingsLayout";
import AccountSettings from "../user/AccountSettings/AccountSettingsInformation";
import EditProfile from "../user/EditProfile/editProfile";
import Home from "../home";
import Logo from "../header/Logo/logo";
import MyCreate from "../header/MyCreate/myCreates";

// import {checkUserLogInOrNot} from '../login/firebase/func';

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
                    <img className = 'img-logo-header' src = 'http://www.freshimpetus.co.uk/wp-content/uploads/2017/10/pinterest-logo.png' alt = 'Logo' />
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
                                        return( <Button
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

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];