import React from 'react';

const AddedEscapeRooms = (props) => {

  const handleClick = (escaperoom) => {
    props.deleteEscapeRoom(escaperoom)
  }

  const results = props.escapeRooms.map(escaperoom => {
    return(

      <li key={escaperoom.id}>{escaperoom.title}<span onClick={()=> handleClick(escaperoom)}>(x)</span></li>
     )
  });

  return(
     <ol>
      {results}
     </ol>
   );
}



export default AddedEscapeRooms
