import React from 'react';
import Button from 'react-bootstrap/Button';

 const DeleteButton = () =>{
  return(
    <Button
         onClick={this.handleDelete}
         variant="primary"
         type="submit"
         value="Delete">Delete
   </Button>

  )

}

export default DeleteButton
