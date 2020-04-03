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
    // foundResults: [],
    // found: false

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
    // this.setState({
    //   query: "",
    //   foundResult:this.props.escapeRoom})
    //   console.log(this.state)
  }


  render() {
    // const found = this.state.found
    // let escapeRoom;
    // if (found){
    //   console.log(this.state)
    //   escapeRoom = this.state.foundResult.title
    // }
    // else{
    //   escapeRoom = ""
    // }

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
