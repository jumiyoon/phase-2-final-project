import React from "react";
import book from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/book icon.png";
import podcast from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/podcast icon.png";
import ThoughtsButton from "./ThoughtsButton";
import { Card } from "semantic-ui-react";


function LogsCard( { title, author, category, url, genre, thoughts, mode }){
    return(
            <Card>
                <div className="icon">
                    <img alt={category} src={category === "Book" ? book : podcast}/>
                </div>
                <h2 className={mode ? "darkText" : "lightText"}>
                    {title}
                </h2>
                <p className={mode ? "darkText" : "lightText"}>
                    <strong>Author:</strong> {author} 
                    <br />
                    <a href={url}>Link</a>
                    <br />
                    <strong>Genre:</strong> {genre}
                    <br />
                </p>
                <ThoughtsButton thoughts={thoughts} mode={mode} />
            </Card>
    )
}

export default LogsCard;