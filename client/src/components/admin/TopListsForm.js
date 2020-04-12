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
      escapeRooms:[],
      posts: []
  }


    handleSubmit = event =>{
      event.preventDefault()
      const list = {title:this.state.title, area:this.state.area, posts_attributes:
        {"1" : {title:'THE HAUNTED MORTUARY'},
         "2" : {title:'EL PASO SHERIFF HAUNTED HOUSE'}
        }
      }

      this.props.createList({'top_list': list})
      this.setState({
        title: "",
        area: "",
        escapeRooms: [],
        posts:[]
      })
    }

    built_params = () =>{

    }

    foundEscapeRoom = (escapeRoom) =>{

      this.setState({
        escapeRooms: [...this.state.escapeRooms, escapeRoom],
        posts: [...this.state.posts, escapeRoom.title]
      })

      this.props.removeFound(escapeRoom)
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
          <Form.Label column sm={2}>Area</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            value={this.state.area}
            onChange={this.handleChange}
            name="area"/>
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
