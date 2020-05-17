
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import basementCourtyard  from '../img/carousel-pics/BasementCourtyard-640-480.jpg';
import thirteenthgate from '../img/carousel-pics/13thGate-640-480.jpg';
import larry from '../img/carousel-pics/larry-bones-640-480.jpg';
import doldricks from '../img/carousel-pics/Doldricks-640-480.jpg';
import joey from '../img/carousel-pics/Joey-Escape-The-Night-640-480.jpg';
import skyoddessy from '../img/carousel-pics/SkyOddessy640-480.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "react-responsive-carousel/lib/styles/carousel.min.css";


class FeaturedCarousel extends Component {
    render() {
        return (
            <Carousel className="splash-carousel"
              autoPlay
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={false}
              showArrows={true}
              centerSlidePercentage={20}>

                <div>
                    <img src={basementCourtyard} alt="d"  />
                  <p className="legend">The Courtyard at the Basement</p>
                </div>
                <div>
                    <img src={thirteenthgate} alt="d" />
                    <p className="legend">Cutthroat Cavern at the 13thGate Escape </p>
                </div>
                <div>
                    <img src={larry} alt="d" />
                    <p className="legend">Larry Bones - Bone Yard Effects</p>
                </div>
                <div>
                    <img src={doldricks} alt="d" />
                    <p className="legend">Captain Spoopy Bones at Doldrick's Escape Room</p>
                </div>
                <div>
                    <img src={joey} alt="d" />
                    <p className="legend">Escape The Night Escape Room</p>
                </div>
                <div>
                    <img src={skyoddessy} alt="d" />
                    <p className="legend">Sky Odyssey at Maze Rooms</p>
                </div>

            </Carousel>
        );
    }
}

export default FeaturedCarousel
