import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updatePost } from '../../actions/postActions';
import { connect } from 'react-redux';
import { fetchStates } from '../../actions/postActions';
import { getPost } from '../../actions/postActions';
import Editor from './Editor'
import Dropzone from 'react-dropzone'
import { withRouter, Redirect } from 'react-router-dom'


// check on what props are loading( no website, but there are others too)


class EditForm extends Component {

  // const intitalState = {
  //   title: this.props.title
  // }

  constructor(props) {
    super(props);
    console.log(this.props.post)
    this.state = {

      title: "" ,
      content: "",
      city: {
        name:""
      },
      image: null,
      video: "",

      recommended_players: "",
      price: "",
      difficulty: "",
      public_or_private: "",
      recommended_age: "",
      scarefactor: "",
      published_at: "",
      company_website: ""
    }

  }

componentDidUpdate = (prevProps) => {
  console.log(this.props)

  if(prevProps !== this.props){
    this.setState({
      title: this.props.post.title,
      content: this.props.post.content,
      city:this.props.post.city || {name:''},

      image: null,
      video: this.props.post.video,

      recommended_players: this.props.post.recommended_players,
      price: this.props.post.price,
      difficulty: this.props.post.difficulty,
      public_or_private: this.props.post.public_or_private,
      recommended_age: this.props.post.recommended_age,
      scarefactor: this.props.post.scarefactor,
      published_at: this.props.post.published_at|| "",
      company_website: this.props.post.company_website

    })

  }

}



  componentDidMount = () => {
    this.props.fetchStates()
    // console.log(this.props)
    // const postId = this.props.match.params.id
    // this.props.getPost(postId)

    // this.setState({
    //   title: this.props.postData.title,
    //   content: this.props.post.content,
    //
    //   image: null,
    //   video: this.props.post.video,
    //
    //   recommended_players: this.props.post.recommended_players,
    //   price: this.props.post.price,
    //   difficulty: this.props.post.difficulty,
    //   public_or_private: this.props.post.public_or_private,
    //   recommended_age: this.props.post.recommended_age,
    //   scarefactor: this.props.post.scarefactor,
    //   published_at: this.props.post.published_at,
    //   company_website: this.props.post.company_website
    //
    // })
  }





  handleChange = event => {
    const {name, value } = event.target;
    if(name === 'city'){
      this.setState({
        [name]: {'name':value}
      })
    }else{
    this.setState({
      [name]: value
    })
    }
    console.log(this.state.city)
  }
  handleSubmit = event =>{

    event.preventDefault()



    const post = new FormData();

    post.append('[post]title', this.state.title)
    post.append('[post]content', this.state.content)
    post.append('[post]category_id', this.state.category_id)
    post.append('[post]state', this.state.state_id)
    post.append('[post]video', this.state.video)
    post.append('[post]city_name', this.state.city)
    post.append('[post]recommended_players', this.state.recommended_players)
    post.append('[post]price', this.state.price)
    post.append('[post]difficulty', this.state.difficulty)
    post.append('[post]public_or_private', this.state.public_or_private)
    post.append('[post]recommended_age', this.state.recommended_age)
    post.append('[post]scarefactor', this.state.scarefactor)
    post.append('[post]published_at:', this.state.published_at)
    post.append('[post]company_website:', this.state.company_website)


    if(this.state.image !== null){
      post.append('[post]image', this.state.image)
    }

    console.log(this.state)
    this.props.updatePost(post)
    window.alert('you updated the post')
    this.setState({
      title:"",
      content:"",
      category_id: "1",
      state_id: "1",
      image: null,
      video: "",
      city: {},
      recommended_players:"",
      price: "",
      difficulty:"",
      public_or_private:"",
      recommended_age: "",
      scarefactor:"",
      published_at: "",
      company_website: "",
    })

  }

  getEditorText = (editorText) =>{
    console.log(editorText)
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
    const category = this.props.category || ""
    const postState = this.props.state || ""
    const city = this.props.city || ""

    const statesList = this.props.states.map(state => {

        return(

          <option key={state.id} value={state.id}>{state.abbreviation}</option>
        );
    });
    console.log(this.props)
    return(
      // <div className = "post-form">
      <div>
      <form onSubmit={this.handleSubmit}>

        <Form.Group controlId="">
          <Form.Label column sm={2}>Title</Form.Label>
          <input size="lg"
                 type="text"
                 value={this.state.title }
                 onChange={this.handleChange}
                 name="title" />

        </Form.Group>
        <Form.Row>
          <Form.Group as={Form.Col} controlId="">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" defaultValue={this.state.category_id || category.id } onChange={this.handleChange} name="category_id">
            <option value="1">Escape Rooms</option>
            <option value="2">Haunts</option>
            <option value="3">Oddities</option>
          </Form.Control>
          </Form.Group>
          <Form.Group as={Form.Col} controlId="">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue={this.state.state_id || postState.abbreviation} onChange={this.handleChange} name="state_id">
              {statesList}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="">
          <Form.Label column sm={2}>City</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            value={this.state.city.name}
            onChange={this.handleChange}
            name="city"/>
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label column sm={2}>Video Link</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.video} onChange={this.handleChange} name="video"/>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Form.Col} controlId="">
          <Form.Label>Recommended Players</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.recommended_players} onChange={this.handleChange} name="recommended_players"/>
          </Form.Group>
          <Form.Group as={Form.Col} controlId="">
          <Form.Label>Price</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.price} onChange={this.handleChange} name="price"/>
          </Form.Group>
          <Form.Group as={Form.Col} controlId="">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.difficulty} onChange={this.handleChange} name="difficulty"/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Form.Col} controlId="">
          <Form.Label>Public or Private</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.public_or_private} onChange={this.handleChange} name="public_or_private"/>
          </Form.Group>
          <Form.Group as={Form.Col} controlId="">
          <Form.Label>Recommended Age</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.recommended_age} onChange={this.handleChange} name="recommended_age"/>
          </Form.Group>
          <Form.Group as={Form.Col} controlId="">
          <Form.Label>Scare Factor</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.scarefactor} onChange={this.handleChange} name="scarefactor"/>
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Published-DD-MM-YYYY</Form.Label>
          <Form.Control size="lg" type="text" value={this.state.published_at} onChange={this.handleChange} name="published_at"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Company Website</Form.Label>
        <Form.Control size="lg" type="text" value={this.props.company_website} onChange={this.handleChange} name="company_website"/>
        </Form.Group>

        <Form.Group >
          <Form.Label>Blog Post</Form.Label>
          <Editor
            getEditorText={this.getEditorText}
            content={this.state.content} />


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

        </form>

      </div>
    )
  }
}

const mapStateToProps = state => {

     return {
       states: state.states.states}
};
// EditForm.defaultProps = {
//   title: "title" ,
//   content: "",
//
//   image: null,
//   video: "",
//
//   recommended_players: "",
//   price: "",
//   difficulty: "",
//   public_or_private: "",
//   recommended_age: "",
//   scarefactor: "",
//   published_at: "",
//   company_website: ""
//
// }

// export default connect(mapStateToProps, {updatePost, fetchStates, getPost})(EditForm)
export default EditForm = withRouter(connect(mapStateToProps, {updatePost, fetchStates, getPost})(EditForm));
