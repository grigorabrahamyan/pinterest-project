import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {DropzoneArea} from "material-ui-dropzone";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import userAvatar from '../../../assets/images/userAvatar.png'

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

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function UserAvatar(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const[files , setFiles] = useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <React.Fragment>
            <div>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={3}>
                        <div  className={classes.avatarWrapper}>
                            <img
                                id={props.avatarId}
                                className={classes.avatar}
                                src= {(props.avatarUrl)
                                        ? props.avatarUrl
                                        : userAvatar
                                    }
                                alt="Avatar"/>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div>
                            <Button
                                onClick={handleClickOpen}
                                variant="contained"
                                component="span"
                                className={classes.button}>
                                {props.btnChange}
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Modal title
                    </DialogTitle>
                    <DialogContent>
                        <DropzoneArea
                            acceptedFiles = {['image/jpeg', 'image/jpg', 'image/png', 'image/bmp']}
                            filesLimit={1}
                            fullWidth={true}
                            maxWidth={`sm-12`}
                            onChange={() =>setFiles(files)} />

                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </React.Fragment>
    )
}