import React from 'react';
import hauntGirlLogo from '../img/haunt-girl-logo.jpg'
import Social from './Social'

const Navbar = () =>{
  return (
    <header class="header-section">
      <div class="header-warp">
        <div class="header-social d-flex justify-content-end">
          <p>Follow me:</p>
           <Social />

        </div>
        <div class="header-bar-warp d-flex">
          {/* logo */}
          <a href="home.html" class="site-logo">
            <img src='hauntGirlLogo' alt=""/>
          </a>
          <nav class="top-nav-area w-100">
            <div class="user-panel">
              <a href="">Login</a> / <a href="">Register</a>
            </div>
          {/*  Menu */}
            <ul class="main-menu primary-menu">
              <li><a href="home.html">Home</a></li>
              <li><a href="games.html">Haunt Reviews</a>
                <ul class="sub-menu">
                  <li><a href="game-single.html">Game Singel</a></li>
                </ul>
              </li>
              <li><a href="review.html">Escape Rooms</a></li>
              <li><a href="blog.html">News</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

  );
}


export default Navbar
