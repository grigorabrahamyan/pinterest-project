import React from 'react';
import "./user.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserAvatar from "../Avatar/avatar"
import {Link, Route, Switch} from "react-router-dom";
import Home from "../../home";
import AccountSettings from "../../user/AccountSettings/AccountSettingsInformation";
import EditProfile from "../../user/EditProfile/editProfile";
import history from "../../user/history";



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

