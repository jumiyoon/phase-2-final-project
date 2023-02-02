import React from "react";


function Filter({ filterBy, filterByCategory }) {
    function handleCategoryChange(e) {
        filterByCategory(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div className = "ui filter">
            <p><strong>Filter by category</strong></p>
             <select
                name="sortByCategory"
                value={filterBy}
                onChange={handleCategoryChange}
            >
                <option value="All">All</option>
                <option value="Book">Book</option>
                <option value="TedTalk / Podcast">TedTalk / Podcast</option>
            </select>
            <br/>
            <br/>
        </div>
    )
}

export default Filter;