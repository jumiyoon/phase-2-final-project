import React from "react";
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

function DeleteCardButton( { id, deleteLog }) {
    const button = <Button secondary onClick={()=>handleClick(id)} style={{background: "#BF0000"}}>Delete Log</Button>
    const navigate = useNavigate();

    function handleClick(id){
       const confirm= window.confirm("This log will be deleted.");

       if (confirm) {
                fetch(`http://localhost:3000/reflections/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    if (res.ok) {
                        deleteLog(id);
                        navigate("/logs")
                    }
                })    
       } else {
            console.log("Log not deleted")
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