import React, {Component} from 'react';
import Editor from './Editor'
import {connect} from 'react-redux';
import {createList} from '../../actions/listActions';
import Form from 'react-bootstrap/Form';
import EscapeRoomSearch from './EscapeRoomSearch';
import AddedEscapeRooms from './AddedEscapeRooms';
import {removeFound} from '../../actions/searchActions';

class TopListsForm extends Component {
  state = {

      title: "",
      area: "",
      escapeRooms: [],
  }


    handleSubmit = event =>{
      event.preventDefault()
      const list = this.state


      this.props.createList({'list': list})
    }

    foundEscapeRoom = (escapeRoom) =>{
      this.setState({
        escapeRooms: [...this.state.escapeRooms, escapeRoom]
      })
      this.props.removeFound()
      console.log(this.state.escapeRooms)
    }

    handleChange = event =>{
      const {name, value } = event.target;
      this.setState({
        [name]: value
      })
    }

    deleteEscapeRoom = escapeRoom =>{

      let filteredEscapeRooms = this.state.escapeRooms.filter(room => room !== escapeRoom)
      this.setState({escapeRooms: filteredEscapeRooms});
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

        <AddedEscapeRooms
          escapeRooms={this.state.escapeRooms}
          deleteEscapeRoom={this.deleteEscapeRoom} />
        <input type="submit" value='Create List'/>
      </Form>
      </>
    );
   }
  }



export default connect(null,{createList, removeFound})(TopListsForm)
