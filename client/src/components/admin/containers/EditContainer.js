import React, { Component } from 'react';
import { getPost } from '../../../actions/postActions';
import { connect } from 'react-redux';
import EditForm from '../EditForm';
import AdminHeader from '../AdminHeader'
class EditContainer extends Component {

  componentDidMount(){
    const postId = this.props.match.params.id
    console.log(this.props)
    this.props.getPost(postId)
  }

  render(){
    return(
     <>
      <div className='AdminHeader'>
        <AdminHeader />
      </div>
      <div>
      <EditForm />

      </div>
    </>
    )
  }
}


const mapStateToProps = state => ({
     post: state.posts.post
});


export default connect(mapStateToProps, {getPost})(EditContainer)
