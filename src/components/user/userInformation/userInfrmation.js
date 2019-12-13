import React from "react";
import AccountSettings from "../AccountSettings/accountSettings";
import EditProfile from "../EditProfile/editProfile";

export default function UserInformation(props) {
    return (
        <div>
            <AccountSettings />
            <EditProfile/>
        </div>
    )
}