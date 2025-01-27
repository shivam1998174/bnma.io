import React from 'react'
// import Gallery from '../components/Gallery';
// import AbouttheAssociation from '../components/AbouttheAssociation';
import AboutTitle from '../components/AboutTitle';
// import AboutSection from '../components/AboutSection';
// import LeadershipSection from '../components/LeadershipSection';
// import VisionSection from '../components/VisionSection';
// import MissionSection from '../components/MissionSection';
// import EventsSection from '../components/EventsSection';
import Abouthero from '../components/Abouthero';

const About = () => {
  return (
    <div className='About-page'>
      <Abouthero />
      <section className="bg-gray-100">
        <div className="container mx-auto px-6">
         <AboutTitle />
        </div>
      </section>
    </div>
  )
}

export default About;