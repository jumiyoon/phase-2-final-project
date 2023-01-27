import React, { useState } from "react";

function ThoughtsButton( { thoughts, mode}) {
    const [ isOpen, setIsOpen ] = useState(false)
    const button = <button onClick = {handleClick}>{ isOpen ? "Hide Thoughts" : "View Thoughts" }</button>

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