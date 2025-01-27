import React from "react";

const AboutTitle = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-black py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About Bihar Nurserymen Association
          </h1>
          <p className="text-lg">
            Together, we work towards combating climate change and conserving
            natural resources. Join us as we lead the mission for a greener,
            sustainable future.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl pb-3 font-bold text-green-600 mb-6" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
            Who We Are
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
              <p className="text-lg leading-7 mb-6">
                In the current scenario of climate change and depleting
                groundwater, weather patterns are disrupting the balance of
                nature. These disruptions pose significant risks to humans and
                all forms of life on Earth. Changes in temperature result in
                altered rainfall patterns, leading to droughts in some areas and
                floods in others.
              </p>
              <p className="text-lg leading-7">
                We, the Nurserymen and Progressive Farmers, have taken this
                mission into our own hands. As <strong>Green Warriors</strong>,
                we aim to lead large-scale plantation drives and groundwater
                conservation programs in collaboration with the Government,
                Private Institutions, NGOs, Corporates, Schools, and Colleges.
              </p>
            </div>
            <img
              src="img1.jpg"
              alt="Plantation Initiative"
              className="rounded-lg shadow-lg" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true"
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-green-50 py-16" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl pb-3 font-bold text-green-600 mb-6">Our Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: "A.K. Mani", role: "President", img: "img2.jpg" },
              { name: "Abhijeet Narayan", role: "Secretary", img: "img2.jpg" },
              { name: "Amrita", role: "Treasurer", img: "img3.jpg" },
            ].map((leader, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center"
              >
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-green-600 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl pb-4 font-bold text-green-600 mb-6">Our Vision</h2>
          <ul className="list-disc list-inside text-lg leading-7 space-y-4">
            <li>
              To bring all people working in the Nursery and its Allied sector
              under one platform, fostering mutual business development.
            </li>
            <li>
              To transform the Nursery Business in Bihar from unorganized to an
              organized industry.
            </li>
          </ul>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-green-50 py-16" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl pb-4 font-bold text-green-600 mb-6">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="list-disc list-inside text-lg leading-7 space-y-4">
              <li>
                To convert Bihar from a plant purchaser to a plant
                grower/producer, becoming the largest supplier of its native and
                traditional horticultural and ornamental plants across India.
              </li>
              <li>
                To uplift businesses of Nurserymen and create employment by
                promoting skill development in various gardening services.
              </li>
              <li>
                To increase awareness and importance of plantation among farmers
                and students, inspiring them to become Green Warriors.
              </li>
            </ul>
            <img
              src="green-mission.jpg"
              alt="Green Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTitle;
