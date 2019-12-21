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

    function onAccountSettingsHandleClick() {
        history.push('/user/account_settings/');
    }
    function onEditProfileHandleClick() {
        history.push('/user/edit_profile/');
    }

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
                    <MenuItem onClick={onAccountSettingsHandleClick}>
                        <Link
                            to="/accountSettingsInformation">
                            Account Settings
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={onEditProfileHandleClick}>
                        <Link to="/editProfile">Edit profile</Link>
                    </MenuItem>

                    <MenuItem
                        onClick={handleClose}>
                        Logout
                    </MenuItem>
                </Menu>
            </div>
            <div>
                <Switch>
                    <Route
                        exact path="/"
                        component={Home}/>
                    <Route
                        history = {history}
                        path='/user/account_settings'
                        component={AccountSettings}/>
                    <Route
                        history = {history}
                        path='/user/edit_profile'
                        component={EditProfile}/>
                </Switch>
            </div>
        </>
    );
}
