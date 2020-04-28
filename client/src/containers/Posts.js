import React, { Component } from 'react';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import PostsList from '../components/PostsList';
import Navbar from '../components/Navbar';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import { fetchStatesWithPosts } from '../actions/stateActions';
import { narrowByState } from '../actions/postActions';
import StatesList from '../components/StatesList';
import {fetchCities}  from '../actions/cityActions';
import { Link } from 'react-router-dom';
import CitiesList from '../components/CitiesList';

class Posts extends Component {

  componentDidMount(){
    const route = this.props.match.path
    var category = /[^/]*$/.exec(route)[0];

    console.log(category)

    this.props.fetchPosts(category)
    this.props.fetchStatesWithPosts(category)
  }

  handleStateClick = (event) => {
    event.preventDefault()

    const chosenState = event.target.innerText
    this.props.narrowByState(chosenState)
    this.props.fetchCities(chosenState)


  }

  handleCityClick = (event) => {
    event.preventDefault()

  }



  render(){
    const cityList = () => {
        if (this.props.cities){
          const cities = <CitiesList cities={this.props.cities} handleCityClick={this.handleCityClick}/>
          return cities
       }
     }

    return(
      <div>
        <Navbar />
          <section className="page-top-section set-bg" data-setbg="img/page-top-bg/2.jpg">
        		<div className="page-info">
        			<h2>Haunts</h2>
        			<div className="site-breadcrumb">
        				<Link to="/">Home</Link>  /
        				<span>Reviews</span>
        			</div>
        		</div>
        	</section>
          <section className="review-section">
            <div className="container">
             <StatesList states={this.props.states} handleStateClick={this.handleStateClick} />

              {cityList}


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
  return {
    posts: state.posts.posts,
    states: state.states.states,
    cities: state.cities.cities
  }
}

export default connect(mapStateToProps, { fetchCities, fetchPosts, fetchStatesWithPosts, narrowByState })(Posts);
