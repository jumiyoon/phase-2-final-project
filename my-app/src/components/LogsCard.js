import React from "react";
import book from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/book icon.png";
import podcast from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/podcast icon.png";
import ThoughtsButton from "./ThoughtsButton";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom"

function LogsCard( { log, mode }){
    return(

            <Card className="card" color={mode ? "orange" : "purple"}>
                <img alt={log.category} src={log.category === "Book" ? book : podcast}/>
                <Link to={`/logs/${log.id}`} style={{color: "#C291A4"}}>{log.title}</Link>
                <p>
                    <strong>Author:</strong> {log.author} 
                    <br />
                    <a href={log.url}>Link</a>
                    <br />
                    <strong>Genre:</strong> {log.genre}
                    <br />
                </p>
                <ThoughtsButton thoughts={log.thoughts} mode={mode} />
            </Card>
    )
}

export default LogsCard;