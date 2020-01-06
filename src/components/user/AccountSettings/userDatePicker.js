import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputLabel from "@material-ui/core/InputLabel";


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: ".75rem 1rem",
        borderRadius: 3,
        boxShadow: "none",
        backgroundColor: "transparent",
        borderWidth: 1,
        border: "1px solid #ccc",
        marginTop: ".45rem",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },

}));

export default function UserDatePicker(props) {
    const classes = useStyles();

    const onHandleDateChange = (date) => {
        props.userDateChange(date)
    }

    return (
        <>
            <InputLabel htmlFor={props.datePicker}>{props.label}</InputLabel>
            <DatePicker
                id={props.datePicker}
                className={classes.container}
                selected={props.startDate}
                onChange={onHandleDateChange}
            />
        </>
    );
}

