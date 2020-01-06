import React from "react"
import Header from "../../components/header";
import Main from "../../components/main";

export default function DefaultLayout(props) {
    return (
        <div>
            <Header/>
            <Main>
                <h1>Default Layout</h1>
            </Main>
        </div>
    )
};