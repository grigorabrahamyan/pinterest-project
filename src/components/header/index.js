import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import About from "../about";
import User from "../user";
import Home from "../home";

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

export default function Header(props) {
    const classes = useStyles();
    return (
        <Router>
            <header>
                <nav>
                    <ul className={classes.listStyleNone}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}





