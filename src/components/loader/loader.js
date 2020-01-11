import React from "react";
import "./loader.css"

export default function Loader() {
    const classes = useStyles();
    let arr = [1, 2, 3];

    return(
        <div className="loadWrapper">
            <div className="loader">
                {arr.map((el, index)=>
                        <div key={el} className="line"/>
                    )}
            </div>
        </div>
)
}