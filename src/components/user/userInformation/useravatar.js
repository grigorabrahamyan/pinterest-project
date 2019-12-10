import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import UserInfoHeaderTitle from "./UserInfoHeaderTitle";
import UserInfoHeaderSubTitle from "./UserInfoHeaderSubTitle";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 800,
        width: "100%"
    },
    avatar: {
        maxWidth: 100,
        maxHeight: 100,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
    },
    avatarWrapper: {

    }
}));

export default function UserAvatar(props) {
    const classes = useStyles();
    return(
        <React.Fragment>
            <div>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={3}>
                        <div  className={classes.avatarWrapper}>
                            <img
                                className={classes.avatar}
                                src="https://ramcotubular.com/wp-content/uploads/default-avatar.jpg"
                                alt="Avatar"/>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div>
                            <Button variant="contained">{props.btnChange}</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}