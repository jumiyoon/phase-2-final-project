import React from "react";

function Header( {onDarkModeClick, mode}){
    return (
        <div>
            <header>
                <span className={isDarkMode ? "darkMode" : "lightMode"} >Thought Log.</span>
                <button onClick={onDarkModeClick}>
                    {mode ? "Light" : "Dark"} Mode
                </button>
            </header>
        </div>
    )
}

export default Header;