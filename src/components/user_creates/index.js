import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SvgIcon from '@material-ui/core/SvgIcon'
import "./Pinterest.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Profile from "./../Profile/Profile"
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Checkbox from '@material-ui/core/Checkbox';
import Boards from "./Boards";
import Pins from "./Pins";
import Topics from "./Topics";


export default function Index(){
    const [name, setName] = useState("Narek Barseghyan");
    const [followers, setFollowers] = useState(0)
    const [following, setFollowing] = useState(0)
    return(
        <Router>
        <div>
            <div  className="icons">

                <div style={{display:"flex"}}>
                             <div>
                 <div className="name">{name}</div>
                <div className="followers">{followers+"    "}followers{"        "+following+"  "}following</div>
                             </div>
                    <img className="pinterestlogo" src="https://cdn.worldvectorlogo.com/logos/pinterest-1.svg" alt="logo"/>
                 </div>
        </div>
            <div>
            </div>
            <Navbar/>
                <Route path="/Boards" component={Boards}/>
                <Route path="/Pins" component={Pins}/>
                <Route path="/Topics" component={Topics}/>
        </div>
        </Router>
    )
}


const Navbar  = () =>{
    return(
        <div className="Navbar" >
            <NavLink className="text-decoration" to="Boards"><Button  variant="contained" color="secondary">
                Boards
            </Button>
            </NavLink>
            <></>
            <NavLink className="text-decoration" to="Pins"><Button variant="contained" color="secondary">
                  Pins
            </Button>  </NavLink>
            <NavLink className="text-decoration" to="Topics"><Button variant="contained" color="secondary">
                Topics
            </Button>  </NavLink>
        </div>
    )
}




