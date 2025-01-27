import React, { useState } from 'react';

// Dummy data for images
const galleryImages = [
  { id: 1, src: 'img1.jpg', alt: 'Tree Plantation Project 1' },
  { id: 2, src: 'img2.jpg', alt: 'Groundwater Conservation Project' },
  { id: 3, src: 'img3.jpg', alt: 'Environmental Awareness Campaign' },
  { id: 4, src: 'img4.jpg', alt: 'Sustainable Agriculture Initiative' },
  { id: 5, src: 'img5.jpg', alt: 'Community Workshop' },
  { id: 6, src: 'img6.jpg', alt: 'Green Farming Practices' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal with the selected image
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="300" data-aos-once="true">
        <h2 className="text-3xl font-bold text-green-600 mb-8">Our Projects Gallery</h2>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white font-bold text-xl transition-opacity duration-300">
                View Full Image
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Enlarged Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-96 h-64 object-cover rounded-lg shadow-xl"
              />
              <button
                className="absolute top-0 right-0 p-2 text-white bg-gray-800 rounded-full"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
