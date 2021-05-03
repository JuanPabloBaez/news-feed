import React, { useState } from 'react';
import './searchBar.css';


export default function SearchBar( {search} ) {
   
    const [inputValue, setInputValue] = useState('')

    function handleInputValue({target}) {
        setInputValue(target.value); 
         
      }

    return (
        <div className="search-bar" >
        <input type="search" name="name" value={inputValue} onChange={handleInputValue}  />
        <button onClick={()=> search(inputValue)} >
        Search
        </button>
        </div>
    )
}