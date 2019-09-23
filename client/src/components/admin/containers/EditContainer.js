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
    console.log(this.props.post)
    return(
      <EditForm
        post ={this.props.post}
        category={this.props.post.category}
        state={this.props.post.state}
        city={this.props.post.city} />
    )
  }
}


const mapStateToProps = state => ({
     post: state.posts.post
});


export default connect(mapStateToProps, {getPost})(EditContainer)
