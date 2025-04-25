import { useParams } from "react-router-dom";

const Gallery = () => {
  const { category } = useParams();

  const allImages = {
    health: [
      "/assets/gallery/health1.jpg",
      "/assets/gallery/health2.jpg",
      // ...
    ],
    environment: [
      "/assets/gallery/env1.jpg",
      "/assets/gallery/env2.jpg",
      // ...
    ],
    education: [
      "/assets/gallery/edu1.jpg",
      "/assets/gallery/edu2.jpg",
      // ...
    ],
  };

  const images = allImages[category] || [];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-6 capitalize">
        {category} Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${category} ${idx + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
