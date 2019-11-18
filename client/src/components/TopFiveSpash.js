import React, {Component} from 'react';
import doubleArrow from '../img/icons/double-arrow.png'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchRecentPosts} from '../actions/postActions';
import MostRecentPosts from './MostRecentPosts'

class TopFiveSplash extends Component{


   componentDidMount(){
     this.props.fetchThreeTopFive()

   }

  render(){

    return(
      <section class="blog-section spad">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-lg-8 col-md-7">
              <div class="section-title text-white">
                <h2>Top 5 by City</h2>
                 <ul class="blog-filter">
                  <li>Los Angeles</li>
                  <li>New York</li>
                  <li>Atlanta</li>

                </ul>
              </div>
            </div>
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

export default connect(mapStateToProps ,{fetchRecentPosts})(TopFiveSplash)
