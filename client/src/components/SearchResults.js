import React, { Component } from 'react';
import ResultList from './ResultList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsletterSection'
import { Link } from 'react-router-dom';
import StatesList from '../components/StatesList';



import { connect } from 'react-redux'

class SearchResults extends Component {

  handleStateClick = (event) => {
    event.preventDefault()
    const chosenState = event.target.innerText
    this.props.narrowByState(chosenState)
  }


   render() {

     return (
      <div>
       <Navbar />
       <section className="page-top-section set-bg" >
         <div className="page-info">

           <div className="site-breadcrumb">
             <Link to="/">Home</Link>  /
             <span>Reviews</span>
           </div>
         </div>
       </section>
       <section className="review-section">
         <div className="container">
          {/*<StatesList states={this.props.states} handleStateClick={this.handleStateClick} />*/}
          <ResultList posts={this.props.results} />
       </div>
     </section>

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
