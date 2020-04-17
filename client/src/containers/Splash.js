import React from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import ShortBio from '../components/ShortBio';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';
import FeaturedSection from '../components/FeaturedSection';
import NewsletterSection from '../components/NewsletterSection';
import FeaturedCarousel from '../components/FeaturedCarousel';
import TopFiveSplash from '../components/TopFiveSpash';

const Splash = () =>{

  return(
    <div>
      <Navbar />
      <FeaturedCarousel />
      <ShortBio />
      <Featured />
      {/* <BlogSection /> */}
      <TopFiveSplash />
      <FeaturedSection />
      <NewsletterSection />
      <Footer />

    </div>
  );
}


export default Splash
