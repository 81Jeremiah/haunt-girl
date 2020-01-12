


import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6

import 'react-quill/dist/quill.snow.css'; // ES6
import PropTypes from 'prop-types';


export default class Editor extends Component {

    constructor (props) {
      super(props)
      console.log(props)
      this.state = { editorHtml:props.content ||  "" , theme: 'snow' }
      this.handleChange = this.handleChange.bind(this)
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
         this.setState({ editorHtml: this.props.content })
       }
     }

    render () {
      console.log(this.props.content)
      const content = this.props.content
      console.log(content)
      return (
        <div>
          <ReactQuill
            theme={this.state.theme}
            onChange={this.handleChange}
            defaultValue={ this.state.editorHtml || content}
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
