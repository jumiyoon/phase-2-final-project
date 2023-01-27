import React from "react";

function Header( {onDarkModeClick, mode}){
    return (
        <div>
            <header className="header">
                <span className={mode ? "darkMode" : "lightMode"} >Thought Log.</span>
                <button onClick={onDarkModeClick}>
                    {mode ? "Light" : "Dark"} Mode
                </button>
            </header>
        </div>
    )
}

export default Header;