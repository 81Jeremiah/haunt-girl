import React, { Component } from 'react';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import PostsList from '../components/PostsList';
import Navbar from '../components/Navbar';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import { fetchStatesWithPosts } from '../actions/stateActions';
import StatesList from '../components/StatesList';
import { Link } from 'react-router-dom';

class Posts extends Component {
  componentDidMount(){
    const category = this.props.match.path
    console.log(category)

    this.props.fetchPosts(category)
    this.props.fetchStatesWithPosts()
  }

  handleStateClick = (event) => {
    event.preventDefault()
    this.props.narrowByState(event.value)

  }

  render(){
    return(
      <div>
        <Navbar />
          <section class="page-top-section set-bg" data-setbg="img/page-top-bg/2.jpg">
        		<div class="page-info">
        			<h2>Haunts</h2>
        			<div class="site-breadcrumb">
        				<Link to="/">Home</Link>  /
        				<span>Reviews</span>
        			</div>
        		</div>
        	</section>
          <section class="review-section">
            <div class="container">
            <StatesList states={this.props.states} handleStateClick={this.handleStateClick} />


             <PostsList posts={this.props.posts} categoryRoute={this.props.match.path} />
          </div>
        </section>
        <NewsletterSection />
        <Footer />
      </div>

    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    posts: state.posts.posts,
    states: state.states.states
  }
}

export default connect(mapStateToProps, { fetchPosts, fetchStatesWithPosts })(Posts);
