import React, {useCallback, useState, useEffect} from "react";
import UserInfoHeaderTitle from "./UserInfoHeaderTitle";
import UserInfoHeaderSubTitle from "./UserInfoHeaderSubTitle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import UserAvatar from "./useravatar";
import UserInputForm from "./userInputForm";
import "../EditProfile/editProfileFirebase"
import Button from "@material-ui/core/Button";
import {db} from "../EditProfile/editProfileFirebase";
import {Link} from "react-router-dom";
import * as firebase from "firebase";

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
    },
    cancelButton: {
        textDecoration: "none",
        color: "#000"
    }
}));


export default function UserInfoHeader(props) {


    const classes = useStyles();
    const baseUrl = "www.pinterestaca.am";
    let userId = 'ZLrbfZSFQR4dAMRm8NAx';
    let docRef = db.collection("users").doc(`${userId}`);

    // Create a reference with an initial file path and name
    let storage = firebase.storage();
    let pathReference = storage.ref('/avatars');

    // Create a reference from a Google Cloud Storage URI
    // let gsReference = storage.refFromURL('gs://pinteresttest-18063.appspot.com/avatars/userAvatar.png')

    // Create a reference from an HTTPS URL
    // Note that in the URL, characters are URL escaped!
   // var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');

/*    useEffect(()=> {
        // Create a reference to the file we want to download
        let userAvatarRef = pathReference.child('userAvatar.png');

        // Get the download URL
        userAvatarRef.getDownloadURL().then(function(url) {
            console.log(url);
            setAvatarUrl(url)
        }).catch(function(error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    console.log(error.message);
                    break;

                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    console.log(error.message);
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    console.log(error.message);
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    console.log(error.message);
                    break;
            }
        });
    }, []);*/


    function updateUserData() {
        let userDataInfo = db.collection("users").doc(userId);

        return userDataInfo.update({
            firstName: firstName,
            lastName: lastName,
            username: username,
            userDescription: userDescription,
            location: location,
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
            console.error( error.message);
        });

    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [location, setLocation] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");

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
                            <Link
                                className={classes.cancelButton}
                                to="/">
                                Cancel
                            </Link>
                        </Button>
                        <Button
                            onClick={updateUserData}
                            className={classes.userHeaderBtn}
                            variant="contained">
                            Update
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <UserAvatar
                        avatarUrl={avatarUrl}
                        avatarId="user_avatar"
                        btnChange="Change"/>
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