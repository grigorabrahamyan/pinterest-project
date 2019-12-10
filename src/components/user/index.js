import React from "react";
import Sidebar from "./Sidebar/Sidebar"
import UserInformation from "./userInformation/userInfrmation";

export default class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            profileOptions: "",
        }
    }
    editProfileHandelClick = (v)=> {
        console.log(v);
        console.log(v.target);
        console.log(v.target.value);
        // switch (v) {
        //     case "editPr":
        //         this.setState({
        //             profileOptions: 1,
        //         });
        //         break;
        //         case "accountSt":
        //         this.setState({
        //             profileOptions: 2,
        //         });
        //         break;
        // }
    };


    render() {
        return (
            <div>
                <Sidebar />
                <UserInformation />
            </div>
            )
    }

}