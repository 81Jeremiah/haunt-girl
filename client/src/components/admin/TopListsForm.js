import React, {Component} from 'react';
import Editor from './Editor'
import {connect} from 'react-redux';
import {createList} from '../../actions/listActions';
import Form from 'react-bootstrap/Form';
import EscapeRoomSearch from './EscapeRoomSearch';
import AddedEscapeRooms from './AddedEscapeRooms';

class TopListsForm extends Component {
  state = {

      title: "",
      area: "",
      escapeRoom:{},
      escapeRooms: [],
      found:false
  }


    handleSubmit = event =>{
      event.preventDefault()
      const list = this.state


      this.props.createList({'list': list})
    }

    foundEscapeRoom = (escapeRoom) =>{
      this.setState({
        escapeRooms: [...this.state.escapeRooms, escapeRoom]
        // found: true
      })
      console.log(this.state.escapeRooms)
    }

    handleChange = event =>{
      const {name, value } = event.target;
      this.setState({
        [name]: value
      })
    }



    render(){
      
    return(
      <>
      <EscapeRoomSearch
          addEscapeRoom={this.addEscapeRoom}
          foundEscapeRoom={this.foundEscapeRoom} />

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

        <AddedEscapeRooms escapeRooms={this.state.escapeRooms} />
        <input type="submit" value='Create List'/>
      </Form>
      </>
    );
   }
  }



export default connect(null,{createList})(TopListsForm)
