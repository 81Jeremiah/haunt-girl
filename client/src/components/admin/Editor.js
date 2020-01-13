


import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6

import 'react-quill/dist/quill.snow.css'; // ES6
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../../actions/postActions';


 class Editor extends Component {

    constructor (props) {
      super(props)
      console.log(props)
      this.state = { editorHtml: "" ,
                     theme: 'snow',
                      content: props.content || "" }
      this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
      console.log(this)

      this.props.getPost(3)
    }

    handleChange (html) {

    	this.setState({ editorHtml: html });
      this.sendTextToForm()
      console.log(this.state.editorHtml)
    }

    sendTextToForm = () =>{
      const formText= this.state.editorHtml
      this.props.getEditorText(formText)
    }

    handleThemeChange (newTheme) {
      if (newTheme === "core") newTheme = null;
      this.setState({ theme: newTheme })
    }

     componentDidUpdate(prevProps){
       if (prevProps.content !== this.props.content){
           this.setState({content: this.props.content})
       }
     }

    static getDerivedStateFromProps(props, state){
       state = { editorHtml: "" ,
                      theme: 'snow',
                       content: props.content || "" }
     }

    render () {
      console.log(this.props.post.content)
      const content = this.props.content

      return (
        <div>

          <ReactQuill
            theme={this.state.theme}
            onChange={this.handleChange}
            defaultValue={  this.props.post.content }
            modules={Editor.modules}
            formats={Editor.formats}
            bounds={'.app'}
            placeholder={this.props.placeholder}
           />

          <div className="themeSwitcher">
            <label>Theme </label>
            <select onChange={(e) =>
                this.handleThemeChange(e.target.value)}>
              <option value="snow">Snow</option>
              <option value="bubble">Bubble</option>
              <option value="core">Core</option>
            </select>
          </div>
         </div>
       )
    }
  }

  /*
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
Editor.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'},
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

  /*
   * PropType validation
   */
Editor.propTypes = {
    placeholder: PropTypes.string,
  }

  const mapStateToProps = state => (
      {post: state.posts.post}
  );

export default connect(mapStateToProps, {getPost})(Editor)
