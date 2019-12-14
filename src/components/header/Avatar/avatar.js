import React from "react";
import Avatar from '@material-ui/core/Avatar';
import "./avatar.css";
import userAvatar from "../../../assets/images/userAvatar.png"

function UserAvatar() {
    return (
        <div>
            <ImageAvatars />
        </div>
    )
}

function ImageAvatars() { 
    return (
      <div className="avatar">
        <Avatar alt="User avatar" src={userAvatar} />
      </div>
    );
  }

export default UserAvatar;