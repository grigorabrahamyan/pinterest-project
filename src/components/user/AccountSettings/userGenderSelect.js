import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
    radioGroup: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
    }
}));

export default function UserGenderSelect(props) {
    const classes = useStyles();

    const handleChange = event => {
        props.onGenderChange(event.target.value)
    };

    return (
        <>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
                className={classes.radioGroup}
                aria-label="gender"
                name="gender"
                onChange={handleChange}>
                <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="start"
                />
            </RadioGroup>
        </>
    );
}