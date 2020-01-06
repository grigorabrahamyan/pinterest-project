import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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

export default function UserInformation(props) {
    const classes = useStyles();

/*    function editProfileHandelClick(v) {
    };
    onClick={(accountSt) => editProfileHandelClick(accountSt)}*/

    return (
        <Router>
            <List
                component="nav"
                className={classes.root}
            >
                <ListItem button >
                    <ListItemIcon>
                        <Link to="/edit_profile">
                            <EditIcon />
                        </Link>
                    </ListItemIcon>
                    <ListItemText primary="Edit profile" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <Link to="/account_settings">
                            <AccountBoxIcon />
                        </Link>
                    </ListItemIcon>
                    <ListItemText primary="Account settings" />
                </ListItem>
            </List>
        </Router>
    );
}