import React from "react";
import Avatar from '@material-ui/core/Avatar';
import "./avatar.css";

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
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    );
  }

export default UserAvatar;