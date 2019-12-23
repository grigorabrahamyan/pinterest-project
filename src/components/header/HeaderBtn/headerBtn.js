import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    btnAccent: {
        borderRadius: 20,
        backgroundColor: "transparent",
        cursor: "pointer",
        padding: ".5rem 1rem",
        wordBreak: "keep-all",
        "&:hover": {
            backgroundColor: "rgb(0, 0, 0, 0.06)",
        },
    }

}));


export default function HeaderBtn(props) {
    const classes = useStyles();
    return (
        <Button className={classes.btnAccent}>
            {props.btnText}
        </Button>
    )
}
