import React from "react"
import Header from "../../components/header";
import Main from "../../components/main";
import {Redirect, Route, Switch} from "react-router-dom";
import AccountSettings from "../../components/user/AccountSettings/AccountSettingsInformation";
import EditProfile from "../../components/user/EditProfile/editProfile";
import Home from "../../components/home";

/*state = {
    redirect: false
}
setRedirect = () => {
    this.setState({
        redirect: true
    })
}
renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to='/target' />
    }
}
render () {
    return (
        <div>
            {this.renderRedirect()}
            <button onClick={this.setRedirect}>Redirect</button>
        </div>
    )
}*/

export default function UserSettingsLayout(props) {

    return (
        <div>
            <Header/>
            <Main>
                {props.userPropPage}
            </Main>
        </div>
    )
}