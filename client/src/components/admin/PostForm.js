import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Toolbar from './Toolbar';
import Button from 'react-bootstrap/Button';

class PostForm extends Component {
  state = {
    title:"",
    content:"",
    category:""

  }

  handleChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    })
    console.log(this.state.category)
  }

  handleSubmit = () =>{

  }


  render(){
    return(
      <div className = "post-form">
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" value={this.state.category} onChange={this.handleChange} name="category">
            <option value="Haunts">Haunts</option>
            <option value="Escape Rooms">Escape Rooms</option>
            <option value="Oddities">Oddities</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="">

          <Form.Label>Blog Post</Form.Label>
          <Form.Control as="textarea" rows="15" value={this.state.content} onChange={this.handleChange} name="content"/>
        </Form.Group>
          <Button variant="primary" type="submit" value="New Entry">New Entry</Button>

        </Form>

      </div>
    )
  }
}

export default PostForm
