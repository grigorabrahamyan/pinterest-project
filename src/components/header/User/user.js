import React from 'react';
import "./user.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserAvatar from "../Avatar/avatar"
import {Link, Route, Switch} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";


export default function User() {
    return (
        <div className="myPage">
            <UserMenu/>
            <UserAvatar/>
        </div>
    );
}

function UserMenu() {
    return (
        <SimpleMenu/>
    );
}

const useStyles = makeStyles(theme => ({
    menuDropdown: {
        "": {
            top: "50px!important",
        }

    },
}));


function SimpleMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

/*    function onAccountSettingsHandleClick() {
        props.history.push('/user/account_settings/');
    }
    function onEditProfileHandleClick() {
        props.history.push('/user/edit_profile/');
    }*/

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();

    return (
        <>
            <div>
                <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <div>User</div>
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className={classes.menuDropdown}
                >
                    <MenuItem >
                        <Link
                            to="/user/account_settings/">
                            Account Settings
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link
                            to="/user/edit_profile/">
                            Edit profile
                        </Link>
                    </MenuItem>

                    <MenuItem
                        onClick={handleClose}>
                        Logout
                    </MenuItem>
                </Menu>
            </div>
         </>
    );
}

