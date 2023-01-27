import React, { useState } from "react";

function ThoughtsButton( { thoughts }) {
    const [ isOpen, setIsOpen ] = useState(false)
    const button = <button onClick = {handleClick}>{ isOpen ? "View Thoughts" : "Hide Thoughts"}</button>

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            { isOpen ?  null :<span>{thoughts}</span>}
        </div>
    )
    

}

export default ThoughtsButton 