import React, {useState} from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles} from "@material-ui/core/styles";
import useStyles from "./UseStyles"
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Autocomplete, lab } from '@material-ui/lab';
import {DropzoneArea} from "material-ui-dropzone";

const Pins  = () =>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState("Narek Barseghyan");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const options = categories.map(option => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });
    const[files , setfiles] = useState([])
    return(
        <div className="Navbar" >
            <div>
                <button  className="boardsdiv" type="button" onClick={handleOpen}>
                    <div>
                        <div className={classes.iconWrapper}>
                            <AddIcon className={classes.boardIcon} />

                        </div>
                        <div className="create_board">
                            Create pin
                        </div>
                    </div>
                </button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper2}>
                            <div className="select">
                                <Autocomplete
                                    id="grouped-demo"
                                    options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                    groupBy={option => option.firstLetter}
                                    getOptionLabel={option => option.title}
                                    style={{ width: 300 }}
                                    renderInput={params => (
                                        <TextField {...params} label="With categories" variant="outlined" fullWidth />
                                    )}
                                />
                                <Button variant="contained" color="secondary">
                                    Save
                                </Button>
                            </div>
                           <div className="createpin">
                               <div className="dawnpins">
                                   <DropzoneArea
                                       onChange={() =>setfiles(files)} />
                                       <div className="savebutt">
                                       <Button variant="contained">Save from button</Button>
                                       </div>
                               </div>
                               <div className="seconddiv"> <TextField  className="inputTitle" placeholder="Add your title"  required id="standard-required" label="" defaultValue="" />
                                   <div className="nametitle">{name}</div>
                                   <div> <TextField style={{marginTop:"30px" , width:"300px"}} placeholder="Tell everyone what your Pin is about"  required id="standard-required" label="" defaultValue="" /></div>
                               <div><TextField style={{marginTop:"30px" , width:"300px"}} placeholder="Add a destination link"  required id="standard-required" label="" defaultValue="" /></div>
                               </div>

                           </div>
                        </div>

                    </Fade>

                </Modal>
            </div>
        </div>
    )
}
export default Pins

const categories = [
    { title: ' Ideas for the house'},
    { title: 'Places to visit' },
    { title: 'Stuff to Buy' },
    { title: 'Projects to Try'},
    { title: 'Things to Wear' },
    { title: "Recipes for the cook" },
    ];