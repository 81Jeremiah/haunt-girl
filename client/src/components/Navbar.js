import React from 'react';
import hauntGirlLogo from '../img/IMG_2792.png';
import Social from './Social';
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
          {/*<a href="home.html" class="site-logo">
            <img src={ hauntGirlLogo } alt=""/>
          </a>*/}
          <nav class="top-nav-area w-100">
            {/*<div class="user-panel">
              <Link to="login">Login</Link> / <Link to="register">Register</Link>
            </div>*/}
          {/*  Menu */}
            <ul class="main-menu primary-menu">
              <li><Link to="/"><img src={hauntGirlLogo} alt="log" height="80" width="80"/></Link></li>
              <li><Link to="/haunts">Haunts </Link>
                {/*// <ul class="sub-menu">
                //   <li><a href="game-single.html"></a></li>
                // </ul> */}
              </li>
              <li><Link to="/escaperooms">Escape Rooms</Link></li>
              <li><Link to="/oddities">Oddities</Link></li>
              <li><Link to="/immersives">Immersives</Link></li>
              <li><Link to="/interviews">Interviews</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

  );
}


export default Navbar
