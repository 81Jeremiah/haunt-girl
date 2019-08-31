import React, {Component} from 'react';
import {fetchPosts} from '../actions/postActions';
import {connect} from 'react-redux';
import PostsList from '../components/PostsList';
import Navbar from '../components/Navbar';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

class Posts extends Component {
  componentDidMount(){
    const category = this.props.match.path
    console.log(category)

    this.props.fetchPosts(category)

  }
  render(){
    return(
      <div>
        <Navbar />
          <section class="page-top-section set-bg" data-setbg="img/page-top-bg/2.jpg">
        		<div class="page-info">
        			<h2>Haunts</h2>
        			<div class="site-breadcrumb">
        				<a href="">Home</a>  /
        				<span>Reviews</span>
        			</div>
        		</div>
        	</section>
          <section class="review-section">
            <div class="container">
              <ul class="game-filter">
                <li><a href="">A</a></li>
                <li><a href="">B</a></li>
                <li><a href="">C</a></li>
                <li><a href="">D</a></li>
                <li><a href="">E</a></li>
                <li><a href="">F</a></li>
                <li><a href="">G</a></li>
                <li><a href="">H</a></li>
                <li><a href="">I</a></li>
                <li><a href="">J</a></li>
                <li><a href="">K</a></li>
                <li><a href="">L</a></li>
                <li><a href="">M</a></li>
                <li><a href="">N</a></li>
                <li><a href="">O</a></li>
                <li><a href="">P</a></li>
                <li><a href="">Q</a></li>
                <li><a href="">R</a></li>
                <li><a href="">S</a></li>
                <li><a href="">T</a></li>
                <li><a href="">U</a></li>
                <li><a href="">V</a></li>
                <li><a href="">W</a></li>
                <li><a href="">X</a></li>
                <li><a href="">Y</a></li>
                <li><a href="">Z</a></li>
              </ul>

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
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(Posts);
