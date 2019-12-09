import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Account_settings from "../AccountSettings/accountSettings";
import Edit_profile from "../EditProfile/editProfile";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 250,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));



export default function Sidebar(props) {
    const classes = useStyles();

    function editProfileHandelClick(v) {
        console.log(v);
        console.log(v.target);
        console.log(v.target.value);
    };


    return (
        <Router>
            <List
                component="nav"
                className={classes.root}
            >
                <ListItem button onClick={(editPr) => editProfileHandelClick(editPr)}>
                    <ListItemIcon>
                        <Link to="/">
                            <EditIcon />
                        </Link>
                    </ListItemIcon>
                    <ListItemText primary="Edit profile" />
                </ListItem>
                <ListItem button onClick={(accountSt) => editProfileHandelClick(accountSt)}>
                    <ListItemIcon>
                        <Link to="/about">
                            <AccountBoxIcon />
                        </Link>
                    </ListItemIcon>
                    <ListItemText primary="Account settings" />
                </ListItem>
            </List>
            <Switch>
                <Route path="/main/account_settings">
                    <Account_settings />
                </Route>
                <Route path="/main/edit_profile">
                    <Edit_profile />
                </Route>
            </Switch>
        </Router>
    );
}





