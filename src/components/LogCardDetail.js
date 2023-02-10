import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import book from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/updated book.jpg";
import podcast from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/updated podcast.jpg";
import ThoughtsButton from "./ThoughtsButton";
import { Card, Container } from "semantic-ui-react";
import DeleteCardButton from "./DeleteCardButton";


function LogCardDetail( { mode, deleteLog }){
    const [logToDisplay, setLogToDisplay] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/reflections/${id}`)
            .then((res) => res.json())
            .then((data) => setLogToDisplay(data) )
    }, [id])

    
    if (logToDisplay === null) return <h2> Loading . . . </h2>

    const { title, author, url, genre, category, thoughts } = logToDisplay

    return ( 
        <div className="ui centered card">
            <Container>
                <Card key={id} className="card" color={mode ? "orange" : "purple"}>
                    <br/>
                    <img alt={category} src={category === "Book" ? book : podcast}/>
                    <h2>{title}</h2>
                    <p>
                    <strong>Author:</strong> {author} 
                    <br />
                    <a href={url}>Link</a>
                    <br />
                    <strong>Genre:</strong> {genre}
                    <br />
                    </p>
                    <ThoughtsButton thoughts={thoughts} mode={mode} />
                    <DeleteCardButton id={id} deleteLog={deleteLog}  />
                </Card>
            </Container>
        </div>
    )
}

export default LogCardDetail;