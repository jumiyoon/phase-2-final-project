import React from "react";
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

function DeleteCardButton( { id }) {
    const button = <Button secondary onClick={()=>handleClick(id)} style={{background: "#BF0000"}}>Delete Log</Button>


    console.log(id)

    function handleClick(id){

            fetch(`http://localhost:3000/reflections/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))        

    //    const confirm= window.confirm("This log will be deleted.");

    //    if (confirm) {
    //         useEffect(() => {
    //             fetch(`http://localhost:3000/reflections/${id}`, {
    //                 method: "DELETE",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 }
    //             })
    //             .then(res => res.json())
    //             .then(data => console.log(data))        
    //         }, [id])
    //    } else {
    //         console.log("Log not deleted")
    //    }
    //    console.log(confirm);
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