import React, { useState, useEffect } from "react";

const SliderComponent = () => {
  const slides = [
    {
      id: 1,
      image: "img1.jpg",
      title: "Welcome to Bihar Nurserymen Association",
      description: "Promoting green environment across Bihar",
    },
    {
      id: 2,
      image: "img2.jpg",
      title: "Quality Nursery Services",
      description: "Discover the best plants and services.",
    },
    {
      id: 3,
      image: "img3.jpg",
      title: "Join Our Mission",
      description: "Be a part of a sustainable future.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Slide duration: 4000ms (4 seconds)

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide Container */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg md:text-2xl">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Dots for Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
