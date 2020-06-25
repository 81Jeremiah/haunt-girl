import React, {Component} from 'react';
import AdminHeader from './AdminHeader';
import {connect} from 'react-redux';
import {updateList} from '../../../../actions/listActions';
import Form from 'react-bootstrap/Form';
import EscapeRoomSearch from '../../EscapeRoomSearch';
import AddedEscapeRooms from '../../AddedEscapeRooms';
import {removeFound} from '../../../../actions/searchActions';

class TopListEditForm extends Component {
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

      this.props.updateList({'top_list': list})
      this.setState({
        title: "",
        area: "",
        escapeRooms: [],
        posts:[],
        id: ""
      })
    }

    componentDidUpdate = (prevProps) => {
      if(prevProps !== this.props){
        this.setState({
          title: this.props.list.title || "",
          area: this.props.list.area || "",
          escapeRooms: this.props.list.escapeRooms || [],
          posts: this.props.list.posts || [],
          id: this.props.list.id || ""

        });
      }
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
      <AdminHeader />
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
        <input type="submit" value='Update List'/>
      </Form>
      </>
    );
   }
  }



export default connect(null,{updateList, removeFound})(TopListEditForm)
