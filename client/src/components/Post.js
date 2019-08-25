import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPost} from '../actions/postActions'


class Post extends Component {

  componentDidMount(){
    const postId = this.props.match.params.id
    this.props.getPost(postId)
  }



  render(){

    return(
      <div className="">
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.posts.post)

  return { post: state.posts.post}

}

export default connect(mapStateToProps, {getPost})(Post)
