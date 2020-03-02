import React from 'react';
import hauntGirlLogo from '../img/IMG_2792.png';
import Social from './Social';
import { Link } from 'react-router-dom';
import SearchBar from '../containers/SearchBar';

const Navbar = () =>{
  return (
    <header className="header-section">
      <div className="header-warp">
        <div className="header-social d-flex justify-content-end">
          <p>Follow me:</p>
           <Social />

        </div>
        <div className="header-bar-warp d-flex">
          {/* logo */}
          {/*<a href="home.html" class="site-logo">
            <img src={ hauntGirlLogo } alt=""/>
          </a>*/}
          <nav className="top-nav-area w-100">
            {/*<div class="user-panel">
              <Link to="login">Login</Link> / <Link to="register">Register</Link>
            </div>*/}
          {/*  Menu */}
            <ul className="main-menu primary-menu">
              <li className="header-logo"><Link to="/" >THE HAUNT GIRL</Link></li>
              {/* <li><Link to="/"><img src={hauntGirlLogo} alt="log" height="80" width="80"/></Link></li> */}
              <li><Link to="/">Reviews </Link>
                  <ul className="sub-menu">
                     <li><Link to="reviews/haunts">Haunts </Link></li>
                     <li><Link to="reviews/escaperooms">Escape Rooms</Link></li>
                     <li><Link to="reviews/oddities">Oddities</Link></li>
                     <li><Link to="reviews/immersives">Immersives</Link></li>
                  </ul>
              </li>
              <li><Link to="/">Blog</Link>
                  <ul className="sub-menu">
                     <li><Link to="blog/toprated">Top Rated </Link></li>
                     <li><Link to="blog/tips">Tips</Link></li>
                     <li><Link to="blog/announcements">Announcements</Link></li>
                     <li><Link to="blog/General">General</Link></li>
                  </ul>
              </li>
              <li><Link to="/SkeletonKeyAwards">Skeleton Key Awards</Link></li>
              <li><Link to="/interviews">Interviews</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="contact">Contact</Link></li>
              <li><SearchBar /></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

  );
}


export default Navbar
