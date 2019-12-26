import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    userHeaderBtn: {
        margin: "0 1rem"
    },
    btnWrapper: {
        display: "flex",
        padding: "0 1rem",
        textAlign: "right",
    }
}));

export default function UserInfoHeaderBtns(props) {
    const classes = useStyles();
    return(
        <div className={classes.btnWrapper}>
            <Button
                className={classes.userHeaderBtn}
                variant="contained">
                {props.btnCancel}
            </Button>
            <Button
                className={classes.userHeaderBtn}
                variant="contained">
                {props.btnDone}
            </Button>
        </div>
    )
}