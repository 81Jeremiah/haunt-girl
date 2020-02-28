import React,{Component} from 'react';
import Editor from './Editor'
import AdminHeader from '.AdminHeader'
import {connect} from 'react-redux';
import {createAward} from '../../actions/awardsActions';
import Form from 'react-bootstrap/Form';

class SkeletonKeyForm extends Component{

  state = {
    title: "",
    link: "",
}

  handleSubmit = event =>{
    event.preventDefault()
    this.createAward(this.state)
  }

  onChange = event =>{
    const {name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render(){
  return(
    <>
    <div><AdminHeader /></div>
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
    <div><Editor /> </div>
    </Form>
    </>
  );
 }
}

export default connect(null,{createAward})(SkeletonKeyForm)
