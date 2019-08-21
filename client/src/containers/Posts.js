import React, {Component} from 'react';
import {fetchPosts} from '../actions/postActions';
import {connect} from 'react-redux';
import PostsList from '../components/PostsList';

class Posts extends Component {
  componentDidMount(){

    this.props.fetchPosts()

  }
  render(){
    return(
      <div>
        <PostsList posts={this.props.posts} />
      </div>

    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(Posts);
