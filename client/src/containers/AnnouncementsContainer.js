import React, { Component } from 'react';
import { fetchAnnouncements } from '../actions/announcementActions';
import { connect } from 'react-redux';
import AnnouncementsList from '../components/AnnouncementsList';
import Navbar from '../components/Navbar';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

class AnnouncementsContainer extends Component {

  componentDidMount(){
    this.props.fetchAnnouncements()

  };


  render(){

    return(
      <div>
        <Navbar />
          <section class="page-top-section set-bg" data-setbg="img/page-top-bg/2.jpg">
        		<div class="page-info">
        			<h2>Announcements</h2>
        			<div class="site-breadcrumb">
        				<Link to="/">Home</Link>  /
        				<span>Announcements</span>
        			</div>
        		</div>
        	</section>
          <section class="review-section">
            <div class="container">



             <AnnouncementsList announcements={this.props.announcements}  />
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
    announcements: state.announcements.announcements,
  }
}

export default connect(mapStateToProps)(AnnouncementsContainer)
