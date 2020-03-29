import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResultList from './ResultList';

class SearchResults extends Component{

  render(){
    return(
      <ResultList escapeRooms={this.props.escapeRooms} />
    )
  }

}


const mapStateToProps = state => {
  console.log(state)
  return {escapeRooms: state.searchResults.foundPosts}

}

export default connect(mapStateToProps)(SearchResults)
