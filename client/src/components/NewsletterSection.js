import React from 'react';
import doubleArrow from '../img/icons/double-arrow.png';

const NewsletterSection = () => {
  return(
    <section className="newsletter-section">
      <div className="container">
        <h2>Subscribe to the newsletter</h2>
      <form className="newsletter-form">
          <input type="text" placeholder="ENTER YOUR E-MAIL"/>
        <button className="site-btn">subscribe  <img src={doubleArrow} alt="#"/></button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection
