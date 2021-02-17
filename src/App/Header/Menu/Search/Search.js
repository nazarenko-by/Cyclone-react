import React from 'react'

import './search.css'
import search from './Search.png'

const Search = () =>{
    return(
        <div className="search">
            <input type="text"/>
            <button><img src={search} alt=""/></button>
        </div> 
    )
}

export default Search