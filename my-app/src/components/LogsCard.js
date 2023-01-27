import React from "react";
import book from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/book icon.png";
import podcast from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/podcast icon.png";
import ThoughtsButton from "./ThoughtsButton";

function LogsCard( { title, author, category, url, genre, thoughts }){
    return(
            <div>
                <div className="icon">
                    <img alt={category} src={category === "Book" ? book : podcast}/>
                </div>
                <div className="log-title">
                    {title}
                </div>
                <p className="log-content">
                    <strong>Author:</strong> {author} 
                    <br />
                    <strong>URL:</strong> {url}
                    <br />
                    <strong>Genre:</strong> {genre}
                    <br />
                </p>
                <ThoughtsButton thoughts={thoughts} />
            </div>
    )
}

export default LogsCard;