import React from "react";
import 'aos/dist/aos.css';

const Homeabout = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl pb-4 lg:text-5xl font-extrabold text-center text-green-700 mb-10">
          About Bihar Nurserymen Association
        </h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" >
          {/* Text Section */}
          <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In the current scenario of <span className="font-semibold">Climate Change</span> 
              and depleting groundwater, the weather patterns are disrupting the usual balance 
              of nature. This poses many risks to humans and all other forms of life on Earth. 
              Changes in temperature cause changes in rainfall, leading to problems like drought 
              in some areas and floods in others.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The only solution to these problems is <span className="font-semibold">large-scale plantation</span>, 
              conservation of groundwater, and controlled usage of natural resources. To save 
              our mother nature, we all need to contribute. This can only happen when the entire 
              population of the state and the country connects with this mission.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We, as <span className="font-bold text-green-600">Green Warriors</span>, have taken this 
              task into our hands. Nurserymen and progressive farmers will lead from the front, 
              working on plantation drives and groundwater conservation programs in collaboration 
              with the Government, Private Institutions, NGOs, Corporates, Schools, and Colleges.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
            <img
              src="img1.jpg" // Replace with actual image
              alt="Plantation Drive"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-sm px-4 py-2 rounded-lg">
              Green Warriors in Action
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-16" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
          <h2 className="text-3xl pb-3 font-bold text-center text-green-700 mb-8">
            Meet Our Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* President */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
              <h3 className="text-xl font-bold text-gray-800">A.K. Mani</h3>
              <p className="text-green-600 font-medium">President</p>
              <p className="text-gray-600 text-sm mt-4">
                Leading the association with a vision for a greener Bihar.
              </p>
            </div>

            {/* Secretary */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
              <h3 className="text-xl font-bold text-gray-800">Abhijeet Narayan</h3>
              <p className="text-green-600 font-medium">Secretary</p>
              <p className="text-gray-600 text-sm mt-4">
                Driving initiatives and partnerships for conservation.
              </p>
            </div>

            {/* Treasurer */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
              <h3 className="text-xl font-bold text-gray-800">Amrita</h3>
              <p className="text-green-600 font-medium">Treasurer</p>
              <p className="text-gray-600 text-sm mt-4">
                Ensuring efficient resource management for all projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeabout;
