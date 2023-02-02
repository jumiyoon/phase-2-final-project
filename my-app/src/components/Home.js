import React from "react";

function Home( {mode} ) {
    return (
        <div>
            <span 
                className={mode ? "darkModeHome" : "lightModeHome"}>
                <br /><br /><br /><br/>
                an intellectual warehouse for your mind.
            </span>
        </div>
    )
}

export default Home;