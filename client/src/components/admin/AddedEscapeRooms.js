import React from 'react';

const AddedEscapeRooms = (props) => {
  console.log(props.escapeRooms)
  const results = props.escapeRooms.map(escaperoom => {
    return(

      <li key={escaperoom.id}>{escaperoom.title}</li>
     )
  });

  return(
     <ol>
      {results}
     </ol>
   );
}



export default AddedEscapeRooms
