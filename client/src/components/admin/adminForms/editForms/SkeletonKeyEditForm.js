import React,{Component} from 'react';
import Editor from '../../Editor'
import {connect} from 'react-redux';
import {updateAward,deleteAward } from '../../../../actions/awardActions';
import Form from 'react-bootstrap/Form';
import DeleteButton from '../../buttons/DeleteButton';


class SkeletonKeyEditForm extends Component{
  state = {

      title: "",
      link_to_post: "",
      content: "",
      year:"",
      id: ""

  }


  handleSubmit = event =>{
    event.preventDefault()
    const award = this.state
    const awardId = this.state.id
    console.log(award)
    console.log( {'award': award})

    this.props.updateAward(awardId, {'award': award})
  }

  handleDelete = () => {
    this.props.deleteAward(this.state.id)
    this.props.history.push('/admin/awards')
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
        title: this.props.award.title || "",
        link_to_post: this.props.award.link_to_post || "",
        content: this.props.award.content || "",
        year:this.props.award.year || "",
        id:this.props.award.id || ""

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
      <Form.Label column sm={2}>Year</Form.Label>
      <Form.Control
        size="lg"
        type="text"
        value={this.state.year}
        onChange={this.handleChange}
        name="year"/>
    </Form.Group>
    <Form.Group controlId="">
      <Form.Label column sm={2}>Link</Form.Label>
      <Form.Control
        size="lg"
        type="text"
        value={this.state.link_to_post}
        onChange={this.handleChange}
        name="link_to_post"/>
    </Form.Group>
    <div><Editor content={this.state.content} getEditorText={this.getEditorText}/> </div>
     <input type="submit" value='Create Award'/>
    </Form>
    <DeleteButton />
    </>
  );
 }
}

export default connect(null,{updateAward, deleteAward})(SkeletonKeyEditForm)
