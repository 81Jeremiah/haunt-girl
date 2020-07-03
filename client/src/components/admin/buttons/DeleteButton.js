import React from 'react';
import Button from 'react-bootstrap/Button';

 const DeleteButton = (props) =>{
  return(
    <Button
         onClick={props.handleDelete}
         variant="primary"
         type="submit"
         value="Delete">Delete
   </Button>

  )

}

export default DeleteButton
