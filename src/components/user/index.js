import React from "react";
import Sidebar from "./Sidebar/Sidebar"
import UserInformation from "./userInformation/userInfrmation";

export default function User() {
    return (
        <div>
            <Sidebar />
            <UserInformation/>
        </div>
    );
}