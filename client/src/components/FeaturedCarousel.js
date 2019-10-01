// import React from 'react';
// import hellFestPic from '../img/haunts/Hellfest_2018-09-15_22-57-16.jpg';
// import thirteenthgate from '../img/haunts/IMG_4641.JPG';
//
// import Carousel from 'react-bootstrap/Carousel';
//
//
//
//
// const FeaturedCarousel = () => {
//   return(
//     <Carousel className="hero-section overflow-hidden">
//       <div className ="hero-slider owl-carousel">
//         <div className="hero-item set-bg d-flex align-items-center justify-content-center text-center">
//           <div className="container">
//             <Carousel.Item className="hero-item set-bg d-flex align-items-center justify-content-center text-center">
//               <img
//                 className="d-block w-100"
//                 src={hellFestPic}
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <h3>First slide label</h3>
//                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item >
//               <img
//                 className="d-block w-100"
//                 src="holder.js/800x400?text=Second slide&bg=282c34"
//                 alt="Third slide"
//               />
//
//               <Carousel.Caption>
//                 <h3>Second slide label</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={"holder.js/800x400?text=Third slide&bg=20232a"}
//                 alt="Third slide"
//               />
//
//               <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </div>
//         </div>
//       </div>
//   </Carousel>
//   );
// }
//
// export default FeaturedCarousel
//
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
                    <img src={basementCourtyard} alt="d" height="400" width="100%" />
                    <p className="legend">The Courtyard at the Basement</p>
                </div>
                <div>
                    <img src={thirteenthgate} alt="d" height="400" width="100%" />
                    <p className={"legend"}>Cutthroat Cavern at the 13thGate Escape </p>
                </div>
                <div>
                    <img src={larry} alt="d" height="400" width="100%"/>
                    <p className="legend">Larry Bones - Bone Yard Effects</p>
                </div>
                <div>
                    <img src={doldricks} alt="d" height="400" width="100%"/>
                    <p className="legend">Captain Spoopy Bones at Doldrick's Escape Room</p>
                </div>
                <div>
                    <img src={joey} alt="d" height="400" width="100%"/>
                    <p className="legend">Escape The Night Escape Room</p>
                </div>
                <div>
                    <img src={skyoddessy} alt="d" height="400" width="100%" />
                    <p className="legend">Sky Odyssey at Maze Rooms</p>
                </div>

            </Carousel>
        );
    }
}

export default FeaturedCarousel
