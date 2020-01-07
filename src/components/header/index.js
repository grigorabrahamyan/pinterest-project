import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import UserCreates from "../user_creates";
import User from "./User/user";
import HomeHeader from "./HomeHeader/home";
import Home from "../home"
import Logo from "./Logo/logo";
import Grid from "@material-ui/core/Grid";
import Search from "./Search/search";
// import AccountSettings from "../user/AccountSettings/AccountSettingsInformation";
import EditProfile from "../user/EditProfile/editProfile";
import MyCreate from "./MyCreate/myCreates";
import UserSettingsLayout from "../../hoc/Layout/userSettingsLayout";



const useStyles = makeStyles({
    root: {
        width: 230,
    },
    listStyleNone: {
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        listStyle: "none",
    }
});

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />
);

export default function Header(props) {
    const classes = useStyles();
    return (
        <Router>
            <header>
                <nav>
                    <ul className={classes.listStyleNone}>
                        <Grid container spacing={0} className="header">
                            <Grid item xs={1}>
                                <li>
                                    <Link to="/">
                                        <Logo />
                                    </Link>
                                </li>
                            </Grid>
                            <Grid item xs={5}>
                                <li>
                                    <Search />
                                </li>
                            </Grid>
                            <Grid item xs={2}>
                                <li>
                                    <Link to="/">
                                        <HomeHeader />
                                    </Link>
                                </li>
                            </Grid>
                            <Grid item xs={2}>
                                <li>
                                    <Link to="/user/user_creates">
                                        <MyCreate />
                                    </Link>
                                </li>
                            </Grid>
                            <Grid item xs={1}>
                                <li>
                                    <User />
                                </li>
                            </Grid>
                        </Grid>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route path="/user/user_creates">
                    <UserCreates />
                </Route>
                {/* <AppRoute exact path="/user/account_settings" layout={UserSettingsLayout} component={AccountSettings} /> */}
                <AppRoute exact path="/user/edit_profile" layout={UserSettingsLayout} component={EditProfile} />

                <Route
                    exact
                    path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}





