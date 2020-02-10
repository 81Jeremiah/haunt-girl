import React, { Component } from 'react';
import ResultList from './CreatorList'

import { connect } from 'react-redux'

class SearchResults extends Component {

   render() {
     return (
      <div>
       <ResultList results={this.props.results} />
      </div>
     )
   }
}

const mapStateToProps = state => {
  return {
       results: state.search.results
   }
}

export default connect(mapStateToProps)(SearchResults)
