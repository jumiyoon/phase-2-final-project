import React, { useState } from "react";

function ThoughtsButton( { thoughts }) {
    const [ isOpen, setIsOpen ] = useState(false)
    const button = <button onClick = {handleClick}>{ isOpen ? "Hide Thoughts" : "View Thoughts" }</button>

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            {button} <br />
            { isOpen ?  <span>{thoughts}</span> : null }
        </div>
    )
    

}

export default ThoughtsButton 