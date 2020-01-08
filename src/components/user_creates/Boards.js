import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import useStyles from "./UseStyles"
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";




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



const Boards  = () =>{
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };


    return(
        <div className="Navbar" >
            <div>
                <button  className="boardsdiv" type="button" onClick={handleOpen}>
                    <div>
                        <div className={classes.iconWrapper}>
                            <AddIcon className={classes.boardIcon} />

                        </div>
                        <div className="create_board">
                            Create board
                        </div>
                    </div>
                </button>
                <Dialog className="Dialog" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Create board
                    </DialogTitle>
                    <DialogContent dividers>
                        <div>
                            <div  className="BoardsModule">
                                Name       <input className="input" placeholder="E.g. 'Places to go' or 'Recipes to make'" type="text"/>
                            </div>
                                <hr className="marginvisibility"/>
                                 <div>
                                 Visibility

                                     <Checkbox
                        defaultChecked
                        color="default"
                        value="checkedG"
                        inputProps={{
                            'aria-label': 'checkbox with default color',
                        }}
                        /> Keep this board secret.


                        <hr/>
                        </div>
                        </div>
                        <div  className="buttCloce" >
                        <br/>

                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button className="Cloce" onClick={handleClose} variant="contained"> Cancel</Button>
                        <Button variant="contained">   Create</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}
export default Boards

// <h2 className="Createb">Index board</h2>
// <hr/>
// <div className="BoardsModule">
//     Name    <input className="input" placeholder="E.g. 'Places to go' or 'Recipes to make'" type="text"/>
//     <hr/>
//     <div>
//     Visibility <Checkbox className="boardsecret"
// defaultChecked
// color="default"
// value="checkedG"
// inputProps={{
//     'aria-label': 'checkbox with default color',
// }}
// /> Keep this board secret.
// <hr/>
// </div>
// </div>
// <div  className="buttCloce" >
// <br/>
// <Button className="Cloce" onClick={handleClose} variant="contained"> Cancel</Button>
// <Button variant="contained">   Index</Button>
// </div>
