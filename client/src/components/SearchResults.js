import React, { Component } from 'react';
import ResultList from './ResultList';

import { connect } from 'react-redux'

class SearchResults extends Component {

   render() {
     return (
      <div>
       <ResultList posts={this.props.results} />
      </div>
     )
   }
}

const mapStateToProps = state => {
  return {
       results: state.searchResults.foundPosts
   }
}

export default connect(mapStateToProps)(SearchResults)
