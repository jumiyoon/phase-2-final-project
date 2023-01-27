import React from "react";
import LogsCard from "./LogsCard";

function LogsPage( { logs } ) {

    return (
        <div>
            {logs.map((log) => 
                 <LogsCard
                    key={log.id}
                    title={log.title}
                    category={log.category}
                    author={log.author}
                    url={log.url}
                    genre={log.genre}
                    thoughts={log.thoughts}
                />
        )}
        </div>
        
    )
}

export default LogsPage;