import React from "react";
import UserInfoHeaderTitle from "./UserInfoHeaderTitle";
import UserInfoHeaderSubTitle from "./UserInfoHeaderSubTitle";
import UserInfoHeaderBtns from "./UserInfoHeaderBtns";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import UserAvatar from "./useravatar";
import UserInputForm from "./userInputForm";

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
                    <UserInputForm label = "First name" />
                </Grid>
                <Grid item xs={6}>
                    <UserInputForm label = "Last name"/>
                </Grid>
                <Grid
                    item xs={12}
                    className={classes.usernameInput}
                >
                    <span className={classes.usernameUrl}>{baseUrl} /</span>
                    <UserInputForm label = "Username"/>
                </Grid>
                <Grid item xs={12}>
                    <UserInputForm multiLine = "true" label = "About your profile"/>
                </Grid>
                <Grid item xs={12}>
                    <UserInputForm label = "Location"/>
                </Grid>
            </Grid>
        </div>
    )
};