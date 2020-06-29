import React,{Component} from 'react';
import Editor from '../Editor';
import {connect} from 'react-redux';
import {updateInterview,deleteInterview} from '../../../../actions/interviewActions';
import Form from 'react-bootstrap/Form';
import DeleteButton from '../../buttons/DeleteButton';


class InterviewEditForm extends Component{

  state = {
      title: "",
      content: "",
      website:"",
      id: ""
  }


  handleSubmit = event =>{
    event.preventDefault()
    const interview = this.state
    const interviewId = this.state.id
    this.props.updateInterview(interviewId, {'interview': interview})
  }

  handleDelete = () => {
    this.props.deleteInterview(this.state.id)
    this.props.history.push('/admin/interviews')
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
  };

  componentDidUpdate = (prevProps) => {
    if(prevProps !== this.props){
      this.setState({
        title: this.props.interview.title || "",
        content: this.props.interview.content || "",
        website: this.props.interview.website || "",
        id:this.props.interview.id || ""

      });
    }
  }

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
      <Form.Label column sm={2}>Website</Form.Label>
      <Form.Control
        size="lg"
        type="text"
        value={this.state.website}
        onChange={this.handleChange}
        name="website"/>
    </Form.Group>
    <div><Editor content={this.state.content} getEditorText={this.getEditorText}/> </div>
     <input type="submit" value='Update Interview'/>
    </Form>
    <DeleteButton />
    </>
  );
 }
}

export default connect(null,{updateInterview, deleteInterview})(InterviewEditForm)
