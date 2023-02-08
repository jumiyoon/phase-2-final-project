import React, { useState } from "react";
import { Button } from 'semantic-ui-react'

function ThoughtsButton( { thoughts, mode }) {
    const [ isOpen, setIsOpen ] = useState(false)
    const button = <Button primary onClick = {handleClick}>{ isOpen ? "Hide Thoughts" : "View Thoughts" } </ Button>

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <div className={mode ? "darkText" : "lightText"}>
            {button} <br />
            { isOpen ?  <span>{thoughts}</span> : null }
            <br />
        </div>
    )
    

}

export default ThoughtsButton 