import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faFolderOpen,
  faBookOpen,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Activities = () => {
  const ActivitiesData = [
    {
      id: 1,
      title: "Brain Health Initiatives",
      category: "Health",
      date: "22-07-2024",
      image: "./src/assets/images/Brain Health/bh1.jpg",
      content: "Details about Brain Health Initiatives...",
      images: [
        "./src/assets/images/Brain Health/bh1.jpg",
        "./src/assets/images/Brain Health/bh2.jpg",
        "./src/assets/images/Brain Health/bh3.jpg",
        "./src/assets/images/Brain Health/bh4.jpg",
        "./src/assets/images/Brain Health/bh5.jpg",
        "./src/assets/images/Brain Health/bh6.jpg",
        "./src/assets/images/Brain Health/bh7.jpg",
        "./src/assets/images/Brain Health/bh8.jpg",
        "./src/assets/images/Brain Health/bh9.jpg",
        "./src/assets/images/Brain Health/bh10.jpg",
        "./src/assets/images/Brain Health/bh11.jpg",
        "./src/assets/images/Brain Health/bh12.jpg",
        "./src/assets/images/Brain Health/bh13.jpg",
        "./src/assets/images/Brain Health/bh14.jpg",
        "./src/assets/images/Brain Health/bh15.jpg",
        "./src/assets/images/Brain Health/bh16.jpg",
        "./src/assets/images/Brain Health/bh17.jpg",
      ],
    },
    {
      id: 2,
      title: "Ayushman Bhava (Swatch Hospital, Our Hospital)",
      category: "Environment",
      date: "27-09-2023",
      image: "./src/assets/images/swatch bharath/sb1.jpg",
      content: "",
      images: [
        "./src/assets/images/swatch bharath/sb1.jpg",
        "./src/assets/images/swatch bharath/sb2.jpg",
        "./src/assets/images/swatch bharath/sb3.jpg",
        "./src/assets/images/swatch bharath/sb4.jpg",
        "./src/assets/images/swatch bharath/sb5.jpg",
        "./src/assets/images/swatch bharath/sb6.jpg",
        "./src/assets/images/swatch bharath/sb7.jpg",
        "./src/assets/images/swatch bharath/sb8.jpg",
        "./src/assets/images/swatch bharath/sb9.jpg",
        "./src/assets/images/swatch bharath/sb10.jpg",
        "./src/assets/images/swatch bharath/sb11.jpg",
        "./src/assets/images/swatch bharath/sb12.jpg",
        "./src/assets/images/swatch bharath/sb13.jpg",
       
      ],
    },
    {
      id: 3,
      title: "Kayakalpa Peer Assessment",
      category: "Health",
      date: "30-08-2024",
      image: "./src/assets/images/kayakalpa_peer_assessement/kpa1.jpg",
      content: "",
      images: [
        "./src/assets/images/kayakalpa_peer_assessement/kpa1.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa2.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa3.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa4.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa5.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa6.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa7.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa8.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa9.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa10.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa11.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa12.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa13.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa14.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa15.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa16.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa17.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa18.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa19.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa20.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa21.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa22.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa23.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa24.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa25.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa26.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa27.jpg",
        "./src/assets/images/kayakalpa_peer_assessement/kpa28.jpg",    
      ],
    },
    {
      id: 5,
      title: "Kayakalpa External Assessment",
      category: "Health",
      date: "17 & 18-11-2024",
      image: "./src/assets/images/kayakalpa external assessment/kea1.jpeg",
      content: "",
      images: [
        "./src/assets/images/kayakalpa external assessment/kea1.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea2.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea3.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea4.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea5.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea6.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea7.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea8.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea9.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea10.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea11.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea12.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea13.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea14.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea15.jpeg",
        "./src/assets/images/kayakalpa external assessment/kea16.jpeg",   
      ],
    },
    {
      id: 4,
      title: "musQan",
      category: "Health",
      date: "06-11-2023",
      image: "./src/assets/images/musQan/m1.jpg",
      content: "",
      images: ["./src/assets/images/musQan/m1.jpg",
        "./src/assets/images/musQan/m2.jpg",
        "./src/assets/images/musQan/m3.jpg",
        "./src/assets/images/musQan/m4.jpg",
        "./src/assets/images/musQan/m5.jpg",
        "./src/assets/images/musQan/m6.jpg",
        "./src/assets/images/musQan/m7.jpg",
        "./src/assets/images/musQan/m8.jpg",
        "./src/assets/images/musQan/m9.jpg",
        "./src/assets/images/musQan/m10.jpg",
        "./src/assets/images/musQan/m11.jpg",
        "./src/assets/images/musQan/m12.jpg",
      ],
    },
   
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredBlogs =
    selectedCategory === "All"
      ? ActivitiesData
      : ActivitiesData.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-green-50 min-h-screen relative">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-green-700 text-center mb-2"
      >
        Latest Activities
      </motion.h1>
      <p className="text-gray-600 text-center mb-6">
        Read insightful articles on health, environment, and education.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {["All", "Health", "Environment", "Education"].map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentImageIndex(0);
            }}
            className={`px-5 py-2 rounded-lg font-semibold transition-all ${
              selectedCategory === category
                ? "bg-green-700 text-white shadow-md"
                : "bg-green-200 text-green-800 hover:bg-green-300"
            }`}
          >
            <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
            {category}
          </motion.button>
        ))}
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-all"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-800">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="mr-2 text-green-600"
                />
                {blog.title}
              </h3>
              <p className="text-gray-500 mt-2">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  className="mr-2 text-green-500"
                />
                <span className="font-medium">{blog.category}</span>
              </p>
              <p className="text-gray-500">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="mr-2 text-green-500"
                />
                <span className="font-medium">{blog.date}</span>
              </p>
              <button
                onClick={() => setSelectedBlog(blog)}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Dialog */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-xl w-full shadow-xl relative"
          >
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            {/* Fullscreen Image Gallery */}
<div className="relative w-full h-[400px] flex items-center justify-center bg-black rounded-lg mb-4">
  <img
    src={selectedBlog.images[currentImageIndex]}
    alt={`Image ${currentImageIndex + 1}`}
    className="max-h-[400px] object-contain rounded-lg"
  />

  {/* Left Arrow */}
  {currentImageIndex > 0 && (
    <button
      onClick={() => setCurrentImageIndex((prev) => prev - 1)}
      className="absolute left-4 text-white bg-green-700 p-3 rounded-full hover:bg-green-500 transition"
    >
     <FaArrowLeft size={18} />
    </button>
  )}

  {/* Right Arrow */}
  {currentImageIndex < selectedBlog.images.length - 1 && (
    <button
      onClick={() => setCurrentImageIndex((prev) => prev + 1)}
      className="absolute right-4 text-white bg-green-700 p-3 rounded-full hover:bg-green-500 transition"
    >
     <FaArrowRight size={18} />
    </button>
  )}

  {/* Close Icon */}
  {/* <button
    onClick={() => setSelectedBlog(null)}
    className="absolute top-3 right-3 text-white text-xl bg-gray-800 p-2 rounded-full hover:bg-red-600"
  >
    <FontAwesomeIcon icon={faTimes} />
  </button> */}
</div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              {selectedBlog.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
              {selectedBlog.date} |{" "}
              <FontAwesomeIcon icon={faFolderOpen} className="mr-1" />
              {selectedBlog.category}
            </p>
            <p className="text-gray-700">{selectedBlog.content}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Activities;
