
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import basementCourtyard  from '../img/carousel-pics/BasementCourtyard.PNG';
import thirteenthgate from '../img/carousel-pics/13thGate.JPG';
import larry from '../img/carousel-pics/larry-bones.jpg';
import doldricks from '../img/carousel-pics/Doldricks.jpg';
import joey from '../img/carousel-pics/Joey-Escape-The-Night.jpg';
import skyoddessy from '../img/carousel-pics/SkyOddessy.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";


class FeaturedCarousel extends Component {
    render() {
        return (
            <Carousel className="splash-carousel"
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={false}
              showArrows={true}
              centerSlidePercentage={20}>

                <div>
                    <img src={basementCourtyard} alt="d" height="400" width="auto" />
                  <h1 className="legend">The Courtyard at the Basement</h1>
                </div>
                <div>
                    <img src={thirteenthgate} alt="d" height="400" width="auto" />
                    <p className="legend">Cutthroat Cavern at the 13thGate Escape </p>
                </div>
                <div>
                    <img src={larry} alt="d" height="400" width="auto"/>
                    <p className="legend">Larry Bones - Bone Yard Effects</p>
                </div>
                <div>
                    <img src={doldricks} alt="d" height="400" width="auto"/>
                    <p className="legend">Captain Spoopy Bones at Doldrick's Escape Room</p>
                </div>
                <div>
                    <img src={joey} alt="d" height="400" width="auto"/>
                    <p className="legend">Escape The Night Escape Room</p>
                </div>
                <div>
                    <img src={skyoddessy} alt="d" height="400" width="auto" />
                    <p className="legend">Sky Odyssey at Maze Rooms</p>
                </div>

            </Carousel>
        );
    }
}

export default FeaturedCarousel
