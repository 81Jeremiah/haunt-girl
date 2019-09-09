import React from 'react';
import Social from './Social'
import HGLogo from '../img/IMG_2792.png'

const Footer =() => {

return (
  <footer class="footer-section">
    <div class="container">
      <div class="footer-left-pic">
        <img src="img/footer-left-pic.png" alt=""/>
      </div>
      <div class="footer-right-pic">
        <img src="img/footer-right-pic.png" alt=""/>
      </div>
      <a href="#" class="footer-logo">
        <img src={HGLogo} alt="" widtch="120" height="120" />
      </a>
      <ul class="main-menu footer-menu">
        <li><a href="">Home</a></li>
        <li><a href="">Haunt Reviews</a></li>
        <li><a href="">Escape Rooms</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div class="footer-social d-flex justify-content-center">
         <Social />

      </div>
      <div class="copyright"><a href="">The Haunt Girl</a> 2019 @ All rights reserved</div>
    </div>
  </footer>
 );
}

export default Footer
