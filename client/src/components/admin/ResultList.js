import React from 'react';

const ResultList = (props) => {
  console.log(props)


  const results = props.escapeRooms.map(escaperoom => {
    return(
      <li key={escaperoom.id}><strong>{escaperoom.title}</strong>
      <button >Add</button>
      </li>
     )
  });

  return(
     <ul>
      {results}
     </ul>
  )
}

export default ResultList
