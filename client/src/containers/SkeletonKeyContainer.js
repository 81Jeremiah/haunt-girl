import React, { Component } from 'react';
import { fetchWinners } from '../actions/winnersActions';
import { connect } from 'react-redux';
import AwardsList from '../components/AwardsList';
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
        			<h2>SkeletonKeyAwards</h2>
        			<div class="site-breadcrumb">
        				<Link to="/">Home</Link>  /
        				<span>Congratulations</span>
        			</div>
        		</div>
        	</section>
          <section class="review-section">
            <div class="container">



             <AwardsList winners={this.props.winners}  />
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
    winners: state.winners.winners,
  }
}

export default connect(mapStateToProps, { fetchWinners,})(SkeletonKeyContainer);
