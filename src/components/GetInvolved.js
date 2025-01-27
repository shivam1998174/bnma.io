import React from 'react';
import 'aos/dist/aos.css';

const GetInvolved = () => {
  return (
    <section className="py-12 bg-green-600 text-white text-center" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get Involved with Green Warriors</h2>
        <p className="text-lg mb-8">Join our mission to combat climate change, conserve groundwater, and promote sustainability. Whether you are a volunteer, a donor, or a partner, every contribution counts.</p>
        <a href="/join-us" className="inline-block bg-white text-green-600 font-bold py-3 px-6 rounded-md shadow-lg hover:bg-gray-100 transition duration-300">Join Us Today</a>
      </div>
    </section>
  );
};

export default GetInvolved;
