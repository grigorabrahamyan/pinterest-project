import React, { useState } from 'react';
import "./Pinterest.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Boards from "./Boards";
import Pins from "./Pins";
import Topics from "./Topics";


export default function Index(){
    const [name, setName] = useState("Name Surname");
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
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
                <Route path="/user/user_creates/Boards" component={Boards}/>
                <Route path="/user/user_creates/Pins" component={Pins}/>
                <Route path="/user/user_creates/Topics" component={Topics}/>
        </div>
        </Router>
    )
}


const Navbar  = () =>{
    return(
        <div className="Navbar" >
            <NavLink className="text-decoration" to="/user/user_creates/Boards"><Button  variant="contained" color="secondary">
                Boards
            </Button>
            </NavLink>
            <></>
            <NavLink className="text-decoration" to="/user/user_creates/Pins"><Button variant="contained" color="secondary">
                  Pins
            </Button>  </NavLink>
            <NavLink className="text-decoration" to="/user/user_creates/Topics"><Button variant="contained" color="secondary">
                Topics
            </Button>  </NavLink>
        </div>
    )
}




