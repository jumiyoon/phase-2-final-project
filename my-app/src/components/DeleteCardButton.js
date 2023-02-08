import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from 'semantic-ui-react'

function DeleteCardButton() {
    const button = <Button secondary onClick={handleClick}>Delete Card</Button>
    const { id } = useParams();

    function handleClick(id){
       const confirm= window.confirm("Are you sure you want to delete this log?");

       if (confirm) {
            deleteCard(id);
       } else {
            console.log("Log not deleted")
       }
       console.log(confirm);
    }

    function deleteCard(id){
        useEffect(() => {fetch(`http://localhost:3000/reflections/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        }, [id])
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