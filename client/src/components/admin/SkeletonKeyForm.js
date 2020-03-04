import React,{Component} from 'react';
import Editor from './Editor'
import {connect} from 'react-redux';
import {createAward} from '../../actions/awardActions';
import Form from 'react-bootstrap/Form';

class SkeletonKeyForm extends Component{
  state = {
    title: "",
    link: "",
    content: "",
    year:""
   }


  handleSubmit = event =>{
    event.preventDefault()
    this.props.createAward(this.state)
  }

  handleChange = event =>{
    const {name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  getEditorText = (editorText) =>{
    this.setState({
      content: editorText
    })
    console.log(this.state.content)
  };

  render(){
  return(
    <>
    <Form onSubmit={this.handleSubmit}>
    <Form.Group controlId="">
      <Form.Label column sm={2}>Title</Form.Label>
      <Form.Control
        size="lg"
        type="text"
        value={this.state.title}
        onChange={this.handleChange}
        name="title"/>
    </Form.Group>
    <Form.Group controlId="">
      <Form.Label column sm={2}>Year</Form.Label>
      <Form.Control
        size="lg"
        type="text"
        value={this.state.year}
        onChange={this.handleChange}
        name="year"/>
    </Form.Group>
    <div><Editor content={this.state.content} getEditorText={this.getEditorText}/> </div>
     <input type="submit" value='Create Award'/>
    </Form>
    </>
  );
 }
}

export default connect(null,{createAward})(SkeletonKeyForm)
