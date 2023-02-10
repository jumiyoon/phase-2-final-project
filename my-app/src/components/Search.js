import React from "react";

function Search( { searchBy, filterByTitle, mode } ) {
    function handleChange(event){
        filterByTitle(event.target.value)
    }
    return (    
        <div className="ui search">
            <br />
            <p style={mode ? {color:"white"} : {color:"black"}}><strong>Search by title</strong></p>
            <div className="ui icon input">
                <input 
                    placeholder="Title" 
                    className="prompt" 
                    onChange={handleChange}
                    value={searchBy} />
                <i className="search icon" />
        </div>
        </div>
    )
}

export default Search;