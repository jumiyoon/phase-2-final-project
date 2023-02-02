import React from "react";
import { Select } from 'semantic-ui-react'


function Filter({ filterBy, filterByCategory }) {
    function handleCategoryChange(e, value) {
        filterByCategory(value);
    }

    const categoryOptions = [
        { key: "All", value: "All", text: "All" },
        { key: "Book", value: "Book", text: "Book"},
        { key: "TedTalk / Podcast", value: "TedTalk / Podcast", text: "TedTalk / Podcast" }
    ]

    return (
        <div>
            <p><strong>Filter by category</strong></p>
             <Select
                placeholder="Select category"
                name="sortByCategory"
                value={filterBy}
                onChange={(e, {value})=> handleCategoryChange(e, value)}
                options={categoryOptions}
            />
                {/* <option value="All">All</option>
                <option value="Book">Book</option>
                <option value="TedTalk / Podcast">TedTalk / Podcast</option>
            </Select> */}
            <br/>
            <br/>
        </div>
    )
}

export default Filter;