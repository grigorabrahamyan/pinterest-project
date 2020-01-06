import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles } from '@material-ui/core/styles';


const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),

        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles(theme => ({
    margin: {
        width: "100%",
        margin: theme.spacing(1),
    },
}));

export default function CustomSelect(props) {
    const classes = useStyles();
    const handleChange = event => {
        props.onCountryChange(event.target.value)

    };

    const countries = props.countries;

    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor={props.selectId}>{props.label}</InputLabel>
                <NativeSelect
                    id={props.selectId}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <option value="Select country" />
                    {countries.map((country, index) => {
                        if (countries.length && countries.length > 0){
                            return  (<option key={index} value={country}>{country}</option>)
                        }
                    })}
                </NativeSelect>
            </FormControl>
        </div>
    )
}