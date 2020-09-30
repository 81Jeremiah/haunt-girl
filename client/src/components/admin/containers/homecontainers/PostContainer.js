import React, {Component} from 'react';
import { connect } from 'react-redux';
import Reviews from '../../Reviews';
import { Link } from 'react-router-dom';
import AdminHeader from '../../AdminHeader';
import { fetchPosts } from '../../../../actions/postActions';



class PostContainer extends Component {

  componentDidMount(){
    const route = this.props.match.path
    var category = /[^/]*$/.exec(route)[0];

    console.log(category)

    this.props.fetchPosts(category)

  }

  // componentDidUpdate(prevProps){
  //   if (this.props !== prevProps){
  //     this.props.fetchAllPosts()
  //   }
  // }

  render(){
    return(
      <>
      <div className='AdminHeader'>
        <AdminHeader />

      </div>
      <div>
        <Reviews posts={this.props.posts}/>
      <Link to={`new`}> Create New </Link>

      </div>
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {posts: state.posts.posts}
}
export default connect(mapStateToProps, {fetchPosts})(PostContainer)
