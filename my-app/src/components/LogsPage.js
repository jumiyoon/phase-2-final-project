import React from "react";
import LogsCard from "./LogsCard";

function LogsPage( { logs, mode } ) {

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
                    mode={mode}
                />
        )}
        </div>
        
    )
}

export default LogsPage;