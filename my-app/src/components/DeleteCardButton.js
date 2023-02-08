import React, { useEffect } from "react";
import { Button } from 'semantic-ui-react'

function DeleteCardButton() {
    const button = <Button secondary onClick={handleClick}>Delete Card</Button>

    function handleClick(){
       const confirm= window.confirm("Are you sure you want to delete this log?");

       if (confirm) {

       } else {

       }
       console.log(confirm);
    }

    return(
        <div>
            {button}
            <br />
            <br />
        </div>
    )

}

export default DeleteCardButton;