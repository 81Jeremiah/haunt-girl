import React, { Component } from 'react';
import { Button, FormControl, Form } from 'react-bootstrap';
import { escapeRoomSearch } from '../../actions/searchActions';
import { connect } from 'react-redux';
import SearchResults from  './SearchResults';


 class EscapeRoomSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query: "",
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
    });
  }


  render(){

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
        foundEscapeRoom={this.props.foundEscapeRoom} />



      </>

    )
  }
}

export default connect(null, {escapeRoomSearch})(EscapeRoomSearch);
