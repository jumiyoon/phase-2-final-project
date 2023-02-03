import React from "react";
import LogsCard from "./LogsCard";
import Filter from "./Filter";
import Search from "./Search";
import { Card, Container } from "semantic-ui-react";


function LogsPage( { logs, mode, filterBy, filterByCategory, filterByTitle, searchBy} ) {

    return (
        <div>
            <Container>
                <Search filterByTitle={filterByTitle} searchBy={searchBy} mode={mode} />
                <Filter filterByCategory={filterByCategory} filterBy={filterBy} mode={mode} />
                <Card.Group itemsPerRow = {4}>
                    {logs.map((log) => 
                        <LogsCard
                            key={log.id}
                            log={log}
                            mode={mode}
                        />
                )}
                </Card.Group>
            </Container>
        </div>
    )
}

export default LogsPage;