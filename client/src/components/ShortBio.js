import React, {Component} from 'react';
import doubleArrow from '../img/icons/double-arrow.png'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchRecentPosts} from '../actions/postActions';
import MostRecentPosts from './MostRecentPosts'

class ShortBio extends Component{


   componentDidMount(){
     this.props.fetchRecentPosts()

   }


  render(){
    // const recentPosts = this.props.recentPosts
    //
    // debugger
    // function findHaunts(post) {
    //   return post.category_id === 2;
    // }
    // const recentHaunt = recentPosts.find(findHaunts)

    // const recentHaunt = recentPosts.find( ({ category_id }) => category_id === '2' );

    // console.log(recentHaunt)

    return(


          <section class="intro-section">

            <div class="container">
                {console.log(this.props.recentPosts)}
              <div class="row">
                  <MostRecentPosts recentPosts={this.props.recentPosts}/>
                {
                  /* <div class="col-md-4">

                  <div class="intro-text-box text-box text-white">
                    <div class="top-meta"> <Link to="/haunts">Haunts</Link></div>
                    <h3>2019 Haunt Reviews</h3>
                    <p></p>
                  <Link to="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></Link>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="intro-text-box text-box text-white">
                    <div class="top-meta"> <Link to="/escaperooms">Escape Rooms</Link></div>
                    <h3>Escape Rooms</h3>
                    <p></p>
                  <Link to="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></Link>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="intro-text-box text-box text-white">
                    <div class="top-meta"> <Link to="/oddities">Experiences and more!</Link></div>
                    <h3>Experiences and more!</h3>
                    <p></p>
                    <Link to="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></Link>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
      );
    }
}

const mapStateToProps = state => {
  console.log(state)
  return {recentPosts: state.posts.posts}
}

export default connect(mapStateToProps ,{fetchRecentPosts})(ShortBio)
