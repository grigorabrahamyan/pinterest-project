import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
        padding: "5px 10px"
    },
    inputWrapper: {
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "flex-start",
    },
    label: {
        padding: "0 1.2rem",
    }
}));

export default function UserInputForm(props) {
    const classes = useStyles();
    const label = props.label.replace(" ", "_");
    let multiLine;
    if (props.multyLine){
        multiLine = props.multyLine;
    }
    return (
        <div>
            <FormControlLabel
                classes={{
                    label: classes.label,
                }}
                className={classes.inputWrapper}
                label={props.label}

                control={
                    <TextField
                        id={label}
                        className={classes.textField}
                        margin="dense"
                        variant="outlined"
                        multiline={multiLine}
                    />
                }
                 />
        </div>
    )
}

