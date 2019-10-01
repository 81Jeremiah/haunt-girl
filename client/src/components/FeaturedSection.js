import React from 'react';
import doubleArrow from '../img/icons/double-arrow.png'
const FeaturedSection = () => {
  return(

    <section class="featured-section">
      <div class="featured-bg set-bg" data-setbg="img/featured-bg.jpg"></div>
      <div class="featured-box">
        <div class="text-box">
          <div class="top-meta">December 27 2019  /  in <a href="">Escape Rooms</a></div>
          <h3>2019 Skeleton Key Winners</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum posuere porttitor justo id pellentesque. Proin id lacus feugiat, posuere erat sit amet, commodo ipsum. Donec pellentesque vestibulum metus...</p>
          <a href="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection
