import React, {Component} from 'react';
import Editor from './Editor'
import {connect} from 'react-redux';
import {createList} from '../../actions/listActions';
import Form from 'react-bootstrap/Form';
import EscapeRoomSearch from './EscapeRoomSearch'
class TopListsForm extends Component {
  state = {

      title: "",
      area: "",
      escapeRoom:{},
      escapeRooms: []
  }


    handleSubmit = event =>{
      event.preventDefault()
      const list = this.state


      this.props.createList({'list': list})
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

    addEscapeRoom = (escapeRoom) =>{
      this.setState({
        escapeRoom:escapeRoom
      })
    }

    addIngredient = event => {
      event.preventDefault()
      const { escapeRooms, escapeRoom } = this.state;
      escapeRooms.push(escapeRoom)

      this.setState({
        escapeRooms,
        escapeRoom: ''
      }, () => console.log(escapeRooms))
    }

    render(){
    return(
      <>
      <EscapeRoomSearch
          addEscapeRoom={this.addEscapeRoom} />

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
          value={this.state.area}
          onChange={this.handleChange}
          name="year"/>
      </Form.Group>

       <input type="submit" value='Create List'/>
      </Form>
      </>
    );
   }
  }



export default connect(null,{createList})(TopListsForm)
