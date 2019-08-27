import React,{Component} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import doubleArrow from '../../img/icons/double-arrow.png';
import locationIcon from '../../img/icons/location.png';
import emailIcon from '../../img/icons/mail.png';

class Contact extends Component {

  render(){
    return(
    <>
      <Navbar />
      <section class="page-top-section set-bg" data-setbg="img/page-top-bg/4.jpg">
        <div class="page-info">
          <h2>Contact</h2>
          <div class="site-breadcrumb">
            <Link to="/">Home</Link>  /
            <span>Contact</span>
          </div>
        </div>
      </section>
      <section class="contact-page">
    		<div class="container">
    			{/*// <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522" style="border:0" allowfullscreen></iframe></div> */}
    			<div class="row">
    				<div class="col-lg-7 order-2 order-lg-1">
    					<form class="contact-form">
    						<input type="text" placeholder="Your name"/>
    						<input type="text" placeholder="Your e-mail"/>
    						<input type="text" placeholder="Subject"/>
    						<textarea placeholder="Message"></textarea>
    						<button class="site-btn">Send message<img src={doubleArrow}alt="#"/></button>
    					</form>
    				</div>
    				<div class="col-lg-5 order-1 order-lg-2 contact-text text-white">
    					<h3>What up chief, let's talk why not?</h3>
    					<p></p>
    					<div class="cont-info">
    						<div class="ci-icon"><img src={locationIcon} alt=""/></div>
    						<div class="ci-text">PO Box Hollywood CA 90068</div>
    					</div>
    					<div class="cont-info">
    						<div class="ci-icon"><img src={"img/icons/phone.png"} alt=""/></div>
    						<div class="ci-text"></div>
    					</div>
    					<div class="cont-info">
    						<div class="ci-icon"><img src={emailIcon} alt=""/></div>
    						<div class="ci-text">thehauntgirl@gmail.com</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>

      <Footer />
    </>
    );

  }

}


export default Contact
