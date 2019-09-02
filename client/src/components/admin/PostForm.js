import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createPost } from '../../actions/postActions';
import { connect } from 'react-redux';
import { fetchStates } from '../../actions/postActions';
import Editor from './Editor'

class PostForm extends Component {
  state = {
    title:"",
    content:"test",
    category_id: "1",
    state_id: "1"

  }

  componentDidMount(){
    this.props.fetchStates()
  }





  handleChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    })
    console.log(this.state.content)
  }

  handleSubmit = event =>{
    event.preventDefault()
    const post = this.state
    console.log(post)
    this.props.createPost(post)


  }

  getEditorText = (editorText) =>{
    this.setState({
      content: editorText
    })

  }

  render(){
    const statesList = this.props.states.map(state => {
        return(
          <option key={state.id} value={state.id}>{state.abbreviation}</option>
        );
    });

    return(
      <div className = "post-form">
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="">
          <Form.Label column sm={2}>Title</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" value={this.state.category_id} onChange={this.handleChange} name="category_id">
            <option value="1">Escape Rooms</option>
            <option value="2">Haunts</option>
            <option value="3">Oddities</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="" onChange={this.handleChange} value={this.state.content} name="content">
          <Form.Label>Blog Post</Form.Label>
          <Editor getEditorText={this.getEditorText} />


           {/* <Form.Control as="textarea" rows="15" value={this.state.content} onChange={this.handleChange} name="content"

             /> */}
        </Form.Group>

        <Form.Group controlId="">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" value={this.state.state_id} onChange={this.handleChange} name="state_id">
            {statesList}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" value="New Entry">New Entry</Button>

        </Form>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {states: state.states.states}

}

export default connect(mapStateToProps, {createPost, fetchStates})(PostForm)
