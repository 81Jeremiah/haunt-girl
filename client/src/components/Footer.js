import React from 'react';
import Social from './Social'
import HGLogo from '../img/IMG_2792.png'

const Footer =() => {

return (
  <footer className="footer-section">
    <div className="container">
      <div className="footer-left-pic">
        <img src="img/footer-left-pic.png" alt=""/>
      </div>
      <div className="footer-right-pic">
        <img src="img/footer-right-pic.png" alt=""/>
      </div>
      <a href="#" className="footer-logo">
        <img src={HGLogo} alt="" widtch="120" height="120" />
      </a>
      <ul className="main-menu footer-menu">
        <li><a href="">Home</a></li>
        <li><a href="">Haunt Reviews</a></li>
        <li><a href="">Escape Rooms</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div className="footer-social d-flex justify-content-center">
         <Social />

      </div>
      <div className="copyright"><a href="">The Haunt Girl</a> 2019 @ All rights reserved</div>
    </div>
  </footer>
 );
}

export default Footer
