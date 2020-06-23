import React,{Component} from 'react';
import Editor from '../../Editor';
import {connect} from 'react-redux';
import {updateAnnouncement} from '../../../../actions/announcementActions';
import Form from 'react-bootstrap/Form';


class AnnouncementEditForm extends Component{

  state = {
              title: "",
              content: "",
              id: ""
          };


  handleSubmit = event =>{
    event.preventDefault()
    const announcement = this.state


    this.props.updateAnnouncement(this.state.id, {'announcement': announcement})
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps !== this.props){
      this.setState({
        title: this.props.announcement.title || "",
        content: this.props.announcement.content || "",
        id: this.props.announcement.id || ""
      });
    }
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
      <Form.Label column sm={2}>Title </Form.Label>
      <Form.Control
        size="lg"
        type="text"
        value={this.state.title}
        onChange={this.handleChange}
        name="title"/>
    </Form.Group>
    <div><Editor content={this.state.content} getEditorText={this.getEditorText}/> </div>
    <input type="submit" value='Update Announcement'/>
    </Form>
    </>
  );
 }
}

export default connect(null, {updateAnnouncement})(AnnouncementEditForm)
