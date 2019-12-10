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
        width: "100%"
    },
}));

export default function UserInfoHeader(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={8}>
                    <UserInfoHeaderTitle title = "Edit profile"/>
                    <UserInfoHeaderSubTitle subTitle = "Lorem ipsum Lorem ipsum Lorem ipsum" />
                </Grid>
                <Grid item xs={4}>
                    <UserInfoHeaderBtns btnCancel="Cancel" btnDone = "Done"/>
                </Grid>
                <Grid item xs={12}>
                    <UserAvatar btnChange="Change"/>
                </Grid>
                <Grid item xs={6}>
                    <UserInputForm />
                </Grid>
                <Grid item xs={6}>
                    <UserInputForm />
                </Grid>
            </Grid>
        </div>
    )
};