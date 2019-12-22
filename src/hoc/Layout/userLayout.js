import React from "react"
import Header from "../../components/header";
import Main from "../../components/main";
import Footer from "../../components/footer";


export default function UserLayout(props) {

    return (
        <div>
            <Header/>
            <Main>
                <h1>User Layout</h1>
            </Main>
            <Footer/>
        </div>
    )
}