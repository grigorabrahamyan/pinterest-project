import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
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
                            <input
                                accept="image/*"
                                className={classes.input}
                                style={{ display: 'none' }}
                                id="change-button-file"
                                type="file"
                            />
                            <label htmlFor="change-button-file">
                                <Button
                                    variant="contained"
                                    component="span"
                                    className={classes.button}>
                                    {props.btnChange}
                                </Button>
                            </label>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}