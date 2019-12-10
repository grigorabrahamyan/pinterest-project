import React from "react";
import Button from "@material-ui/core/Button";

export default function UserInfoHeaderBtns(props) {
    return(
        <div>
            <Button variant="contained">{props.btnCancel}</Button>
            <Button variant="contained">{props.btnDone}</Button>
        </div>
    )
}