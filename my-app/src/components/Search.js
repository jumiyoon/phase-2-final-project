import React from "react";

function Search( { searchBy, filterByTitle } ) {
    function handleChange(event){
        filterByTitle(event.target.value)
    }
    return (    
        <div className="ui search">
            <br /><br />
            <p><strong>Search by title</strong></p>
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