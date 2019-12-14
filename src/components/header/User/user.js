import React from 'react';
import "./user.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserAvatar from "../Avatar/avatar"

export default function User() {
  return (
    <div className="myPage">
        <UserMenu />
        <UserAvatar />
    </div>
  );
}

function UserMenu() {
  return (
    <SimpleMenu />
  );
}

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}  >
        <div>User</div>
        
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Edit profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
