import React from "react";
import logo from '../images/airbnb-logo.png';
const NavBar = ()=>{
    return (
        <nav >
            <img src={logo} alt="Logo" className="nav--logo"/>
        </nav>
    )
}

export default NavBar;