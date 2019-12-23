import React from "react";
import Grid from "@material-ui/core/Grid";
import UserInfoHeaderTitle from "../userInformation/UserInfoHeaderTitle";
import UserInfoHeaderSubTitle from "../userInformation/UserInfoHeaderSubTitle";
import UserInfoHeaderBtns from "../userInformation/UserInfoHeaderBtns";
import UserInputForm from "../userInformation/userInputForm";
import makeStyles from "@material-ui/core/styles/makeStyles";
import UserSubSectionTitle from "../userInformation/userSubSectionTitle";
import UserLocationSelect from "./userLocationSelect";
import UserGenderSelect from "./userGenderSelect";

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

export default function AccountSettings(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                alignItems="center">
                <Grid item xs={8}>
                    <UserInfoHeaderTitle title = "Account settings"/>
                    <UserInfoHeaderSubTitle
                        subTitle = "Set your login preferences, help us personalize your experience and make big account changes here" />
                </Grid>
                <Grid item xs={4}>
                    <UserInfoHeaderBtns
                        btnCancel="Cancel"
                        btnDone = "Done"/>
                </Grid>


                <Grid item xs={12}>
                    <UserSubSectionTitle subTitle = "Basic information"/>
                    <UserInputForm label = "Email address" />
                </Grid>
                <Grid item xs={6}>
                    <UserLocationSelect/>
                </Grid>
                <Grid item xs={12}>
                    <UserGenderSelect/>
                </Grid>

            </Grid>
        </div>
    )
}