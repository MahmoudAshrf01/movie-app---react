// import React from 'react'

const Search = (props) => {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search icon" />
        <input 
        type="text" 
        placeholder="Search for  a  movie..." 
        value={props.searchTerm} 
        onChange={(event) => props.setSearchTerm(event.target.value)} />
      </div>

    </div>
  )
}

export default Search