import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const barStyle = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "purple",
        textDecoration: "none",
        color: "white",      
    };

    return (
        <div>
            <NavLink
                to="/"
                exact
                style={barStyle}
                activeStyle={{background: "orange"}}
            >View All</NavLink>
        </div>
    )
}

export default NavBar;