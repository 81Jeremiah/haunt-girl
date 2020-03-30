import React, { Component } from 'react';
import { Button, FormControl, Form } from 'react-bootstrap';
import { escapeRoomSearch } from '../../actions/searchActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchResults from  './SearchResults';


 class EscapeRoomSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
    query: "",
    foundResult: {},
    found: false

  }
}

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

foundEscapeRoom = (escapeRoom) =>{
  this.setState({
    foundResult: escapeRoom,
    found: true
  })
}
  handleSubmit = event =>{
    event.preventDefault()

    this.props.escapeRoomSearch(this.state.query)
    // this.setState({
    //   query: "",
    //   foundResult:this.props.escapeRoom})
    //   console.log(this.state)
  }

  handleClick = event =>{
    event.preventDefault()
    this.props.addEscapeRoom(this.state.found)
  }


  render() {
    const found = this.state.found
    let escapeRoom;
    if (found){
      escapeRoom = this.state.foundEscapeRoom.title
    }
    else{
      escapeRoom = ""
    }

    return(
      <>
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={this.state.query}
          onChange={this.handleChange}/>

         <Button className='search-btn' type="submit"  variant="outline-success">Search</Button>
         {/*<div>{this.found.name}</div> */}

      </Form>

      <SearchResults
        foundEscapeRoom={this.foundEscapeRoom} />

      <div>{escapeRoom}</div>


      </>

    )
  }
}

export default connect(null, {escapeRoomSearch})(EscapeRoomSearch);
