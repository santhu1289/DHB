/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const HeroHeader = () => {
    const [images, setImages] = useState([]);
  //const { isLightOn } = useTheme(); // Accessing the current theme value from the context

  useEffect(() => {
    const importImages = async () => {
      try {
        const allImages = import.meta.glob(
          "../assets/images/*.{jpg,jpeg,png,svg,gif}"
        );

        const selectedImages = ["../assets/images/img1.jpg"];

        const importedImages = await Promise.all(
          selectedImages.map(async (imagePath) => {
            if (allImages[imagePath]) {
              const module = await allImages[imagePath]();
              return module.default;
            }
            console.error(`Image not found: ${imagePath}`);
            return null;
          })
        );

        setImages(importedImages.filter(Boolean));
      } catch (error) {
        console.error("Error importing images:", error);
      }
    };

    importImages();
  }, []);
  return (
    <div>
      {/* Header */}
      {images.length > 0 && (
          <div className="mb-8 relative">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {images.map((image, index) => (
                  <div key={index} className="swiper-slide">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Header */}
            <header className="absolute bottom-0 left-0 w-full flex flex-col items-center text-white text-center p-6 bg-gradient-to-t from-black via-transparent">
              <h2 className="text-lg md:text-4xl font-semibold mb-4 drop-shadow-lg">
                Welcome to District Hospital Ballari
              </h2>
              <p className=" text-sm md:text-lg text-gray-200 drop-shadow-md">
                Providing excellent healthcare services for all.
              </p>
            </header>
          </div>
        )}
    </div>
  )
}

export default HeroHeader
