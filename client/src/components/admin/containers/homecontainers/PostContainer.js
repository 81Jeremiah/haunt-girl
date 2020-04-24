import React, {Component} from 'react';
import { connect } from 'react-redux';
import Reviews from '../../Reviews';
import {fetchAllPosts} from '../../../../actions/postActions';
import { Link } from 'react-router-dom';
import AdminHeader from '../../AdminHeader';

class PostContainer extends Component {

  componentDidMount(){
    this.props.fetchAllPosts()
    }

  render(){
    return(
      <>
      <div className='AdminHeader'>
        <AdminHeader />

      </div>
      <div>
        <Reviews posts={this.props.posts}/>
        <Link to={`/posts/new`}> Create New </Link>

      </div>
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {posts: state.posts.posts}
}
export default connect(mapStateToProps, {fetchAllPosts})(PostContainer)
