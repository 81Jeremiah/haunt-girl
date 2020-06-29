import React from 'react';
import Button from 'react-bootstrap/Button';

 const UpdateButton = () =>{
  return(
    <Button
         onClick={this.handleDelete}
         variant="primary"
         type="submit"
         value="Delete">Delete
   </Button>

  )

}

export default UpdateButton
