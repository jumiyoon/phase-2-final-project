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
                to="/home"
                exact
                style={barStyle}
                activeStyle={{background: "orange" }}
            >Home</NavLink>
            <NavLink
                to="/logs"
                exact
                style={barStyle}
                activeStyle={{background: "orange"}}
            >View Logs</NavLink>
            <NavLink
                to="/newlog"
                exact
                style={barStyle}
                activeStyle={{background:"orange"}}
            >Log Form</NavLink>

        </div>
    )
}

export default NavBar;