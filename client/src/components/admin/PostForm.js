import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createPost } from '../../actions/postActions';
import { connect } from 'react-redux';
import { fetchStates } from '../../actions/postActions';
import Editor from './Editor'
import Dropzone from 'react-dropzone'

class PostForm extends Component {
  state = {
    title:"",
    content:"test",
    category_id: "1",
    state_id: "1",
    image: null,
    video: "",
    city: ""
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
    // const post = this.state


    const post = new FormData();
    post.append('[post]title', this.state.title)
    post.append('[post]content', this.state.content)
    post.append('[post]category_id', this.state.category_id)
    post.append('[post]state_id', this.state.state_id)
    post.append('[post]image', this.state.image)
    post.append('[post]video', this.state.video)
    post.append('[post]city', this.state.city)

    console.log(post)
    this.props.createPost(post)

  }

  getEditorText = (editorText) =>{
    this.setState({
      content: editorText
    })
  };

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles[0]);

    this.setState({
       image: acceptedFiles[0]
    });
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
        <Form.Row>
          <Form.Group as={Form.Col} controlId="">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" value={this.state.category_id} onChange={this.handleChange} name="category_id">
            <option value="1">Escape Rooms</option>
            <option value="2">Haunts</option>
            <option value="3">Oddities</option>
          </Form.Control>
          </Form.Group>
          <Form.Group as={Form.Col} controlId="">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" value={this.state.state_id} onChange={this.handleChange} name="state_id">
              {statesList}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="">
          <Form.Label column sm={2}>City</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.city} onChange={this.handleChange} name="city"/>
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label column sm={2}>Video Link</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.video} onChange={this.handleChange} name="video"/>
        </Form.Group>
        <Form.Group >
          <Form.Label>Blog Post</Form.Label>
          <Editor getEditorText={this.getEditorText} />


           {/* <Form.Control as="textarea" rows="15" value={this.state.content} onChange={this.handleChange} name="content"

             /> */}
        </Form.Group>

        <Form.Label>Image:</Form.Label>

        <div className="text-center mt-5">
          {/* dropzone is handling the image input */}
          <Dropzone
            onDrop={this.onDrop}
            accept="image/png, image/gif,image/jpg,image/jpeg">

          {/*  // styles={{
            //    dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
            //    inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
            //  }} > */}

            {({getRootProps, getInputProps}) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                  {this.state.image !== null ? "File Uploaded" :
                  "Click to uploadfile" }
               </div>
            )}
          </Dropzone>

        </div>



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
