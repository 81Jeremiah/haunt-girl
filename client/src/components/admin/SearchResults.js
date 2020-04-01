import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResultList from './ResultList';

class SearchResults extends Component{



  render(){
    
    return(
      <div>
      {console.log(this.props)}
      <ResultList
        escapeRooms={this.props.escapeRooms}
        foundEscapeRoom={this.props.foundEscapeRoom}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  console.log(state)
  return {escapeRooms: state.searchResults.foundPosts}

}

export default connect(mapStateToProps)(SearchResults)
