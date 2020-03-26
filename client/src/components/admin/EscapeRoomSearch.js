import React, { Component } from 'react';
import { Button, FormControl, Form } from 'react-bootstrap';
import { escapeRoomSearch } from '../../actions/searchActions';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'



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

  handleSubmit = event =>{
    event.preventDefault()

    this.props.escapeRoomSearch(this.state.query)
    this.setState({
      query: "",
      foundResult:this.props.escapeRoom})
    console.log(this.state)
  }

  handleClick = event =>{
    event.preventDefault()
    this.props.addEscapeRoom(this.state.found)
  }
//redirects to search page once submit button clicked
  render() {

    return(
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={this.state.query}
          onChange={this.handleChange}/>

         <Button className='search-btn' type="submit"  variant="outline-success">Search</Button>
         {/*<div>{this.found.name}</div> */}
         <Button onClick={this.handleClick}>Add</Button>
      </Form>


    )

  }
}



const mapStateToProps = state => {
  return {escapeRoom: state.searchResults.foundPosts}
}

export default connect(mapStateToProps, {escapeRoomSearch})(EscapeRoomSearch);
