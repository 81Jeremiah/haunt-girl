import React from 'react';
import doubleArrow from '../img/icons/double-arrow.png'

const ShortBio = () =>{
  return(

          <section class="intro-section">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="intro-text-box text-box text-white">
                    <div class="top-meta"> <a href="">Haunts</a></div>
                    <h3>2019 Haunt Reviews</h3>
                    <p></p>
                    <a href="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></a>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="intro-text-box text-box text-white">
                    <div class="top-meta"> <a href="">Escape Rooms</a></div>
                    <h3>Escape Rooms</h3>
                    <p></p>
                    <a href="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></a>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="intro-text-box text-box text-white">
                    <div class="top-meta"> <a href="">Experiences and more!</a></div>
                    <h3>Experiences and more!</h3>
                    <p></p>
                    <a href="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}

export default ShortBio
