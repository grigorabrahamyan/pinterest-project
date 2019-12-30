import React, {useCallback, useState} from "react";
import UserInfoHeaderTitle from "./UserInfoHeaderTitle";
import UserInfoHeaderSubTitle from "./UserInfoHeaderSubTitle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import UserAvatar from "./useravatar";
import UserInputForm from "./userInputForm";
import "../EditProfile/editProfileFirebase"
import Button from "@material-ui/core/Button";
import firebase from "firebase";

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
    },
    userHeaderBtn: {
        margin: "0 1rem"
    },
    btnWrapper: {
        display: "flex",
        padding: "0 1rem",
        textAlign: "right",
    }
}));


export default function UserInfoHeader(props) {
    const classes = useStyles();
    const baseUrl = "www.pinterestaca.am";

    const userInitials = {
        firstName: "First name",
        lastName: "Last name",
        username: "Username",
        userDescription: "User description",
        location: "Location",
        profile_picture: "url"
    };


    function writeUserData(userId, firstName, lastName, username, userDescription, location, imageUrl) {
        firebase.database().ref('users/' + userId).set({
            firstName,
            lastName,
            username,
            userDescription,
            location,
            profile_picture : imageUrl
        });
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
                    <div className={classes.btnWrapper}>
                        <Button
                            className={classes.userHeaderBtn}
                            variant="contained">
                            Cancel
                        </Button>
                        <Button
                            /*onClick={onSaveBtnClick} */
                            className={classes.userHeaderBtn}
                            variant="contained">
                            Done
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <UserAvatar btnChange="Change"/>
                </Grid>
                <Grid item xs={6}>
                    <UserInputForm
                        value={firstName}
                        onInputChange = {onFirstNameChange}
                        label = "First name" />
                </Grid>
                <Grid item xs={6}>
                    <UserInputForm
                        value={lastName}
                        onInputChange = {onLastNameChange}
                        label = "Last name"/>
                </Grid>
                <Grid
                    item xs={12}
                    className={classes.usernameInput}
                >
                    <span className={classes.usernameUrl}>{baseUrl} /</span>
                    <UserInputForm
                        value={username}
                        onInputChange = {onUsernameChange}
                        label = "Username"/>
                </Grid>
                <Grid item xs={12}>
                    <UserInputForm
                        value={userDescription}
                        onInputChange = {onUserDescriptionChange}
                        multiLine = "true"
                        label = "About your profile"/>
                </Grid>
                <Grid item xs={12}>
                    <UserInputForm
                        value={location}
                        onInputChange = {onLocationChange}
                        label = "Location"/>
                </Grid>
            </Grid>
        </div>
    )
};