import React from "react";
import Footer from "./footer";
import '../styles/index.scss'
import Navbar from "./Navbar";
import Header from "./Header";

import* as layoutStyles from "./layout.module.scss"

const Layout = (props) => {

    return (
        <div className = {layoutStyles.container}>
            <div className = {layoutStyles.content}>
            <Header/>
            {props.children}
            </div>
            
            <Footer />
        </div>
    )
}

export default Layout
