import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import book from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/book icon.png";
import podcast from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/podcast icon.png";
import ThoughtsButton from "./ThoughtsButton";
import { Card, Container } from "semantic-ui-react";
import DeleteCardButton from "./DeleteCardButton";


function LogCardDetail( { mode }){
    const [logsToDisplay, setLogsToDisplay] = useState(null);
    let { id } = useParams();
    console.log(id)
    
    useEffect(() => {
        fetch(`http://localhost:3000/reflections/${id}`)
            .then((res) => res.json())
            .then((data) => setLogsToDisplay(data) )
    }, [id])

    
    if (logsToDisplay === null) return <h2> Loading . . . </h2>

    const { title, author, url, genre, category, thoughts } = logsToDisplay

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
                    {/* <Link to={`/logs/${id}/delete`}><DeleteCardButton /></Link> */}
                    <DeleteCardButton id={id} />
                </Card>
            </Container>
        </div>
    )
}

export default LogCardDetail;