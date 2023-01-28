import React from "react";
import LogsCard from "./LogsCard";


import { Card } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

function LogsPage( { logs, mode } ) {

    return (
        <Container>
            <Card.Group itemsPerRow = {4}>
                {logs.map((log) => 
                    <LogsCard
                        key={log.id}
                        title={log.title}
                        category={log.category}
                        author={log.author}
                        url={log.url}
                        genre={log.genre}
                        thoughts={log.thoughts}
                        mode={mode}
                    />
            )}
            </Card.Group>
        </Container>
        
    )
}

export default LogsPage;