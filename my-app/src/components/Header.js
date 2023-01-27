import React from "react";

function Header( {onDarkModeClick, mode}){
    return (
        <div>
            <header>
                <span className="headerText">Thought Log.</span>
                <button onClick={onDarkModeClick}>
                    {mode ? "Dark" : "Light"} Mode
                </button>
            </header>
        </div>
    )
}

export default Header;