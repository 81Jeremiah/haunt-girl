import React,{Component} from 'react';
import Editor from '../../Editor';
import {connect} from 'react-redux';
import {updateAnnouncement,deleteAnnouncement } from '../../../../actions/announcementActions';
import Form from 'react-bootstrap/Form';
import DeleteButton from '../../buttons/DeleteButton';
import {withRouter} from 'react-router-dom';



class AnnouncementEditForm extends Component{

  state = {
              title: "",
              content: "",
              id: ""
          };

  handleSubmit = event =>{
    event.preventDefault()
    const announcement = new FormData()
    announcement.append('announcement[title]', this.state.title)
    announcement.append('announcement[content]', this.state.content)
    this.props.updateAnnouncement(this.state.id, announcement)
    this.props.history.push('/admin/announcements')
  }

  handleDelete = () => {
    this.props.deleteAnnouncement(this.state.id)
    this.props.history.push('/admin/announcements')
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
    <DeleteButton />
    </>
  );
 }
}

export default withRouter(connect(null, {updateAnnouncement, deleteAnnouncement})(AnnouncementEditForm))
