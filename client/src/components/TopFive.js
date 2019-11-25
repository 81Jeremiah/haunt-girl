import React, {Component} from 'react';
import doubleArrow from '../img/icons/double-arrow.png';


class TopFive extends Component {
  render(){
    return(
      <div class="blog-item">
        <div class="blog-text text-box text-white">

          <div class="top-meta">Top 5 Rooms in <a href="/cities/LosAngeles">Los Angeles</a></div>
          <ul>
          <li>The Basement</li>
          <li>Mad Rapper</li>
          <li>Cake Pan Billy's Wilder Adventure</li>
          <li>The Artichoke That Time Forgot</li>
          <li>Keep Out of the Potato Salad</li>
          </ul>
          <a href="/topfie" class="read-more">Read More  <img src={ doubleArrow } alt="#"/></a>
        </div>
      </div>

    )
  }
}

export default TopFive
