import React from 'react';
import doubleArrow from '../img/icons/double-arrow.png'
const FeaturedSection = () => {
  return(

    <section class="featured-section">
      <div class="featured-bg set-bg" data-setbg="img/featured-bg.jpg"></div>
      <div class="featured-box">
        <div class="text-box">
          <div class="top-meta"> </div>
          <h3>2019 Skeleton Key Winners</h3>
          <p>Congratulations ! These were the Best!</p>
          <a href="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection
