import React from 'react';
import zero from '../img/key-ratings/skeletonkeys0.png';
import one from '../img/key-ratings/skeletonkeys1.png';
import two from '../img/key-ratings/skeletonkeys2.png';
import three from '../img/key-ratings/skeletonkeys3.png';
import four from '../img/key-ratings/skeletonkeys4.png';
import five from '../img/key-ratings/skeletonkeys5.png';

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

const KeyRating = (props) => {

  const keys = imgMapper[props.score]
  return(
    <img src={keys} alt={props.score}/>
  )
}

export default KeyRating
