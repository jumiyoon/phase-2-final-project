import React from "react";
import { Button } from 'semantic-ui-react'

function Header( {onDarkModeClick, mode}){
    return (
        <div>
            <header className="header">
                <span className={mode ? "darkMode" : "lightMode"} >Thought Log.</span>
                { mode ? 
                <Button primary onClick={onDarkModeClick}>
                    {mode ? "Light" : "Dark"} Mode
                </Button> :
                <Button secondary onClick={onDarkModeClick}>
                    {mode ? "Light" : "Dark"} Mode
                 </Button>
                }
            </header>
        </div>
    )
}

export default Header;