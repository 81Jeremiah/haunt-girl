import React from 'react';

const SearchResults = (props) => {
  console.log(props)
  const results = props.escapeRooms.map(escaperoom => {
    return(
      <li key={escaperoom.id}>{escaperoom.title}
      <button onClick={this.handleClick}>Add</button>
      </li>
     )
  });

  return(
     <ul>
      {results}
     </ul>
  )
}


export default SearchResults
