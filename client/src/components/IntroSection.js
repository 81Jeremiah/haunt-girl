import React from 'react';

const IntroSection = () => {
  return(
    <section class="intro-video-section set-bg d-flex align-items-end " data-setbg="./img/promo-bg.jpg">
      <a href="https://www.youtube.com/watch?v=uFsGy5x_fyQ" class="video-play-btn video-popup"><img src="./img/icons/solid-right-arrow.png" alt="#"/></a>
      <div class="container">
        <div class="video-text">
          <h2>Promo video of the game</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </div>
    </section>
  );
}

export default IntroSection
