import React, {useCallback, useState} from "react";
import UserInfoHeaderTitle from "./UserInfoHeaderTitle";
import UserInfoHeaderSubTitle from "./UserInfoHeaderSubTitle";
import UserInfoHeaderBtns from "./UserInfoHeaderBtns";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import UserAvatar from "./useravatar";
import UserInputForm from "./userInputForm";
import "../EditProfile/editProfileFirebase"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 800,
        width: "100%",
        flexDirection: "row-reverse",
    },
    usernameInput: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "baseline",
    },
    usernameUrl: {
        padding: "0 .5rem"
    }
}));



export default function UserInfoHeader(props) {
    const classes = useStyles();
    const baseUrl = "www.pinterestaca.am";

    const userInitials = {
        firstName: "firstName",
        lastName: "lastName",
        username: "username",
        userDescription: "userDescription",
        location: "location",
    }

    const [firstName, setFirstName] = useState(userInitials.firstName);
    const [lastName, setLastName] = useState(userInitials.lastName);
    const [username, setUsername] = useState(userInitials.username);
    const [userDescription, setUserDescription] = useState(userInitials.userDescription);
    const [location, setLocation] = useState(userInitials.location);



    const onFirstNameChange = useCallback((e)=> {
        setFirstName(e);
    }, []);

    const onLastNameChange = useCallback((e)=> {
        setLastName(e);
    }, []);

    const onUsernameChange = useCallback((e)=> {
        setUsername(e);
    }, []);

    const onUserDescriptionChange = useCallback((e)=> {
        setUserDescription(e);
    }, []);

    const onLocationChange = useCallback((e)=> {
        setLocation(e);
    }, []);


    return (
        <div className={classes.root}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <UserInfoHeaderTitle title = "Edit profile"/>
                    <UserInfoHeaderSubTitle subTitle = "People on Pinterest will get to know you with the info below" />
                </Grid>
                <Grid item xs={4}>
                    <UserInfoHeaderBtns btnCancel="Cancel" btnDone = "Done"/>
                </Grid>
                <Grid item xs={12}>
                    <UserAvatar btnChange="Change"/>
                </Grid>
                <Grid item xs={6}>
                    <UserInputForm
                        onInputChange = {onFirstNameChange}
                        label = "First name" />
                </Grid>
                <Grid item xs={6}>
                    <UserInputForm
                        onInputChange = {onLastNameChange}
                        label = "Last name"/>
                </Grid>
                <Grid
                    item xs={12}
                    className={classes.usernameInput}
                >
                    <span className={classes.usernameUrl}>{baseUrl} /</span>
                    <UserInputForm
                        onInputChange = {onUsernameChange}
                        label = "Username"/>
                </Grid>
                <Grid item xs={12}>
                    <UserInputForm
                        onInputChange = {onUserDescriptionChange}
                        multiLine = "true"
                        label = "About your profile"/>
                </Grid>
                <Grid item xs={12}>
                    <UserInputForm
                        onInputChange = {onLocationChange}
                        label = "Location"/>
                </Grid>
            </Grid>
        </div>
    )
};