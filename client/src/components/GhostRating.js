import React from 'react';
import zero from '../img/ghost-meter/Ghosts0.png'
import one from '../img/ghost-meter/Ghosts1.png'
import two from '../img/ghost-meter/Ghosts2.png'
import three from '../img/ghost-meter/Ghosts3.png'
import four from '../img/ghost-meter/ghosts4.png'
import five from '../img/ghost-meter/Ghosts5.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

const GhostRating = (props) => {
  return(
    <img src={imgMapper[this.props.scarefactor]} alt={this.props.scarefactor}/>
  )
}

export default GhostRating
