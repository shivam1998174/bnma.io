import React, { useState } from 'react';

const servicesData = [
  {
    title: 'Large-Scale Plantation Drives',
    description: [
      'Organizing tree-planting initiatives across regions to combat deforestation.',
      'Educating local communities on the importance of maintaining green spaces.',
      'Providing a variety of saplings suited to different climates and areas.'
    ]
  },
  {
    title: 'Groundwater Conservation Programs',
    description: [
      'Developing and implementing sustainable water usage practices.',
      'Promoting rainwater harvesting techniques.',
      'Conducting workshops and awareness programs about groundwater depletion.'
    ]
  },
  {
    title: 'Environmental Awareness Campaigns',
    description: [
      'Creating awareness in schools, colleges, and communities about the importance of preserving the environment.',
      'Conducting seminars, workshops, and online campaigns on sustainability practices.',
      'Collaborating with NGOs to bring positive change to local ecosystems.'
    ]
  },
  {
    title: 'Corporate & Institutional Partnerships',
    description: [
      'Partnering with corporates for corporate social responsibility (CSR) activities focused on environmental conservation.',
      'Offering businesses and institutions customized solutions for sustainability programs.',
      'Organizing eco-friendly initiatives for the workplace and beyond.'
    ]
  },
  {
    title: 'Customized Green Solutions for Homes & Institutions',
    description: [
      'Providing consultation for implementing green solutions in homes, schools, and offices.',
      'Offering solutions for energy conservation, water management, and waste reduction.',
      'Designing and executing green spaces like urban gardens and rooftop plantations.'
    ]
  },
  {
    title: 'Sustainable Farming Practices for Progressive Farmers',
    description: [
      'Promoting organic farming and water-efficient irrigation techniques.',
      'Offering resources and guidance for integrating sustainable agricultural practices.',
      'Supporting local farmers in achieving eco-friendly and profitable agricultural outcomes.'
    ]
  }
];

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="service-card mt-5 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3
        className="text-2xl font-semibold text-green-600 mb-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {service.title}
      </h3>
      {isOpen && (
        <ul className="list-disc text-left pl-5 space-y-3 text-gray-700">
          {service.description.map((point, idx) => (
            <li key={idx} className="text-lg">{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
        <h2 className="text-3xl font-bold text-green-600 mb-6" >Our Services</h2>
        <p className="text-xl text-gray-700 pt-3 mb-12">
          As Green Warriors, we are committed to combating climate change and preserving natural resources. 
          We offer a range of services to help promote large-scale plantation drives and groundwater conservation. 
          By collaborating with government agencies, private institutions, NGOs, corporations, schools, and colleges, 
          we ensure the active participation of communities in this mission.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
