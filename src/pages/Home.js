import React from 'react'
import SliderComponent from '../components/SliderComponent';
import Services from '../components/Services';
import GetInvolved from '../components/GetInvolved';
import Gallery from '../components/Gallery';
import Homeabout from '../components/HomeAbout';

const Home = () => {
  return (
    <div className='home-pages'>
        <SliderComponent />
        <Homeabout />
        <Services />
        <GetInvolved />
        <Gallery />
    </div>
  )
}

export default Home;