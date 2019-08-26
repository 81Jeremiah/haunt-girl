import React from 'react';
import hauntGirlLogo from '../img/haunt-girl-logo.jpg'
import Social from './Social'
import { Link } from 'react-router-dom';


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
              <Link to="login">Login</Link> / <Link to="register">Register</Link>
            </div>
          {/*  Menu */}
            <ul class="main-menu primary-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/haunts">Haunt Reviews</Link>
                {/*// <ul class="sub-menu">
                //   <li><a href="game-single.html"></a></li>
                // </ul> */}
              </li>
              <li><Link to="/escaperooms">Escape Rooms</Link></li>
              <li><Link to="/oddities">Oddities</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

  );
}


export default Navbar
