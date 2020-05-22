import React from 'react';
import doubleArrow from '../img/icons/double-arrow.png';
import TopThreeAwards from './TopThreeAwards';
const FeaturedSection = () => {
  return(

    <section className="featured-section">
      <div className="featured-bg set-bg" data-setbg="img/featured-bg.jpg"></div>
        <div className="featured-box">
          <div className="text-box">
            <div className="top-meta"> </div>
          <h3>2019 Skeleton Key Winners</h3>
          <p>Congratulations ! These were the Best!</p>
          <TopThreeAwards />
        <a href="/SkeletonKeyAwards" className="read-more">Read More  <img src={ doubleArrow } alt="#"/></a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection
