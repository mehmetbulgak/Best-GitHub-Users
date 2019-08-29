import React from "react";
import "./search-box.css"


export const SearchBox = ({placeholder, handleChange}) => (
    <div className="input" >
        <input placeholder={placeholder} type="text"
            onChange={handleChange} />
    </div>
)