import React, {useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// const useStyles = makeStyles(theme => ({
//
// }));

export default function CustomizedSnackbars(props) {
   // const classes = useStyles();
    const [open, setOpen] = React.useState(false);


   useEffect(()=> {
       if (props.hideAlertMessage) {
           setOpen(true)
       }
   },[props.hideAlertMessage])

    const handleClose = (event = "click", reason) => {
        if (reason === 'click_away') {
            return;
        }

        setOpen(false);

        if (!open) {
            props.hideAlertMessage = true;
        }
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert onClose={handleClose} color={props.color}>
                {props.message}
            </Alert>
        </Snackbar>
    );
}

/*
<div className={classes.root}>
 </div>
    <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
    </Button>

<Alert color="error">This is an error message!</Alert>
<Alert color="warning">This is a warning message!</Alert>
<Alert color="info">This is an information message!</Alert>
<Alert color="success">This is a success message!</Alert>*/

