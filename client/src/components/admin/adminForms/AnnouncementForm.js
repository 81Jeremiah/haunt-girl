import React,{Component} from 'react';
import Editor from '../Editor';
import {connect} from 'react-redux';
import {createAnnouncement} from '../../../actions/announcementActions';
import Form from 'react-bootstrap/Form';
import AdminHeader from '../AdminHeader';

class AnnouncementForm extends Component{

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      title: props.announcement.title || "",
      content: props.announcement.content || "",
    };
   }

  handleSubmit = event =>{
    event.preventDefault()
    const announcement = this.state


    this.props.createAnnouncement({'announcement': announcement})
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
    <AdminHeader />
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
    <div><Editor content={this.state.content} getEditorText={this.getEditorText}/> </div>
  <input type="submit" value='Submit'/>
    </Form>
    </>
  );
 }
}

export default connect(null, {createAnnouncement})(AnnouncementForm)
