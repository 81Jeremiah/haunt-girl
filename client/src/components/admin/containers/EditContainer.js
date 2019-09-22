import React, { Component } from 'react';
import { getPost } from '../../../actions/postActions';
import { connect } from 'react-redux';
import EditForm from '../EditForm';

class EditContainer extends Component {

  componentDidMount(){
    const postId = this.props.match.params.id
    this.props.getPost(postId)
  }

  render(){
    const title = this.props.post.title
    console.log(title)
    return(
      <EditForm title ={title} />
    )
  }
}


const mapStateToProps = state => ({
     post: state.posts.post
});


export default connect(mapStateToProps, {getPost})(EditContainer)
