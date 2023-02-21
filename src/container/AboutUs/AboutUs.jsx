import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center' >
      <img src ={images.G} alt ='g letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt ='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>The Gericht team is a collective of passionate and very talented individuals, both in the kitchen and front of house. They bring a wealth of experience working in the most revered restaurants in Australia and internationally.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife'/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt ='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Since 2010, this restaurants is giving fine dining experience across Australia and internationally.edicated to creating exceptional dining experiences for our guests, our team ensure every guest is treated with warmth and a relaxed elegance.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
