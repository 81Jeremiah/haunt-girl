import React from 'react';
import doubleArrow from '../img/icons/double-arrow.png'
import {Link} from 'react-router-dom';

const ShortBio = () =>{
  return(

          <section class="intro-section">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="intro-text-box text-box text-white">
                    <div class="top-meta"> <Link to="/haunts">Haunts</Link></div>
                    <h3>2019 Haunt Reviews</h3>
                    <p></p>
                  <Link to="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></Link>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="intro-text-box text-box text-white">
                    <div class="top-meta"> <Link to="/escaperooms">Escape Rooms</Link></div>
                    <h3>Escape Rooms</h3>
                    <p></p>
                  <Link to="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></Link>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="intro-text-box text-box text-white">
                    <div class="top-meta"> <Link to="/oddities">Experiences and more!</Link></div>
                    <h3>Experiences and more!</h3>
                    <p></p>
                    <Link to="#" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}

export default ShortBio
