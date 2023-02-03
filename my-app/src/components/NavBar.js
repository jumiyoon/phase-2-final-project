import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const barStyle = {
        display: "inline-block",
        width: "110px",
        fontSize: "15px",
        padding: "20px",
        margin: "0 6px 6px",
        background: "purple",
        color: "white",      
    };

    return (
        <div>
            <NavLink
                to="/"
                exact
                style={barStyle}
            >Home</NavLink>
            <NavLink
                to="/logs"
                exact
                style={barStyle}
            >View Logs</NavLink>
            <NavLink
                to="/newlog"
                exact
                style={barStyle}
            >Log Form</NavLink>

        </div>
    )
}

export default NavBar;