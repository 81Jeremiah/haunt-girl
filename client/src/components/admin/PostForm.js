import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Toolbar from './Toolbar'
class PostForm extends Component {
  state = {

  }

  handleSubmit = () =>{

  }


  render(){
    return(
      <div className = "post-form">
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select">
            <option>Haunts</option>
            <option>Escape Rooms</option>
            <option>Oddities</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="">
        
          <Form.Label>Blog Post</Form.Label>
          <Form.Control as="textarea" rows="25" />
        </Form.Group>
        </Form>

      </div>
    )
  }
}

export default PostForm
