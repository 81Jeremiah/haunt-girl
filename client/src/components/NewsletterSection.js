import React from 'react';
import doubleArrow from '../img/icons/double-arrow.png';

const NewsletterSection = () => {
  return(
    <section class="newsletter-section">
      <div class="container">
        <h2>Subscribe to my newsletter</h2>
        <form class="newsletter-form">
          <input type="text" placeholder="ENTER YOUR E-MAIL"/>
          <button class="site-btn">subscribe  <img src={doubleArrow} alt="#"/></button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection
