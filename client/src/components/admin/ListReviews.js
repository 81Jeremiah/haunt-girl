import React, {Component} from 'react'
import { connect } from 'react-redux';

import {fetchAllPosts} from '../../actions/postActions'
class ListReviews extends Component {

  componentDidMount(){
    this.props.fetchAllPosts()
    }

  render(){
    return(
      <div>
      </div>
    )
  }

}

export default connect(null, {fetchAllPosts})(ListReviews)
