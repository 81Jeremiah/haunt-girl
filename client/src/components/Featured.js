import React, {Component} from 'react';
import sliderbg1 from '../img/slider-bg-1.jpg'
import doubleArrow from '../img/icons/double-arrow.png'
import sliderbg2 from '../img/slider-bg-2.jpg'

export default class Featured  extends Component {

  render(){
    return(

      <section className="hero-section overflow-hidden">
        <div className="hero-slider owl-carousel">
          <div className="hero-item set-bg d-flex align-items-center justify-content-center text-center" data-setbg={sliderbg1}>
            <div className="container">
              <h2></h2>
              <p><br/></p>
              <a href="#" class="site-btn">Read More  <img src={doubleArrow} alt="#"/></a>
            </div>
          </div>
          <div className="hero-item set-bg d-flex align-items-center justify-content-center text-center" data-setbg={sliderbg2}>
            <div className="container">
              <h2>Game on!</h2>
              <p>Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor,<br/>sit amet elementum lorem. Ut cursus tempor turpis.</p>
              <a href="#" className="site-btn">Read More  <img src={doubleArrow} alt="#"/></a>
            </div>
          </div>
        </div>
      </section>


    );
  }
}
