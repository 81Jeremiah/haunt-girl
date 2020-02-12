import React, { Component } from 'react';
import ResultList from './ResultList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsletterSection'


import { connect } from 'react-redux'

class SearchResults extends Component {

   render() {
     return (
      <div>
       <Navbar />
       <ResultList posts={this.props.results} />
       <NewsletterSection />
       <Footer />
      </div>
     )
   }
}

const mapStateToProps = state => {
  return {
       results: state.searchResults.foundPosts
   }
}

export default connect(mapStateToProps)(SearchResults)
