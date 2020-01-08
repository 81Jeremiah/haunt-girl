import React, {Component} from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import {fetchAllPosts} from '../../actions/postActions';

class ListReviews extends Component {

  componentDidMount(){
    this.props.fetchAllPosts()
    }

  render(){
    return(
      <div>
        <Reviews posts={this.props.posts}/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {posts: state.posts.posts}
}
export default connect(mapStateToProps, {fetchAllPosts})(ListReviews)
