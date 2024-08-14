import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import CourseHome from '../Allcourse/CourseHome';
import Hprice from '../Pricing/Hprice';
import Footer from '../footer/Footer';

import AboutCard from '../About/AboutCard';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <Hero />
      </div>
      <div className="about-card">
        <AboutCard />
      </div>
      <div className='courseHome'>
      <CourseHome />
      </div>
      <div className='courseHprice'>
          <Hprice />
         </div>
     
      <Footer />
     
    </div>
  );
};

export default Home;
