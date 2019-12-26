import React from "react"
import "./userSettingsLayout.scss"


export default function UserSettingsLayout(props) {

    return (
        <main className="userSettingsMain">
            <div className="content">
                {props.children}
            </div>
        </main>
    )
}