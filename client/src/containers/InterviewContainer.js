import React, { Component } from 'react';
import { fetchWinners } from '../actions/awardActions';
import { connect } from 'react-redux';
import InterviewsList from '../components/InterviewsList';
import Navbar from '../components/Navbar';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

class SkeletonKeyContainer extends Component {

  componentDidMount(){
    this.props.fetchWinners()

  };


  render(){

    return(
      <div>
        <Navbar />
          <section class="page-top-section set-bg" data-setbg="img/page-top-bg/2.jpg">
        		<div class="page-info">
        			<h2>Interviews</h2>
        			<div class="site-breadcrumb">
        				<Link to="/">Home</Link>  /
        				<span>Interviews</span>
        			</div>
        		</div>
        	</section>
          <section class="review-section">
            <div class="container">



             <InterviewsList interviews={this.props.interviews}  />
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
    interviews: state.interviews.interviews,
  }
}

export default connect(mapStateToProps, { fetchWinners,})(SkeletonKeyContainer);
