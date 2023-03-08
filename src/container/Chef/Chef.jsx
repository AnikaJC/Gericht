import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src= {images.chef} alt = "chef"/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title= "chef's word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src ={images.quote} alt = 'quote'/>
          <p className='p__opensans'> I don't think there's any chef that is born great like in music or in sports. You have to Burn Yourself... Messing Up makes you a better chef</p>
        </div>
        <p className='p__opensans'> A recipe has no soul. You, as the cook, must bring soul to the recipe</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src ={images.sign} alt= 'sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
