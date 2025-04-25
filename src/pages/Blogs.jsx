import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faFolderOpen,
  faBookOpen,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      title: "Brain Health Initiatives",
      category: "Health",
      date: "2025-03-05",
      image: "./src/assets/images/Brain Health/bh1.jpg",
      content: "Details about Brain Health Initiatives...",
    },
    {
      id: 2,
      title: "Sustainable Living Tips",
      category: "Environment",
      date: "2025-03-10",
      image: "https://source.unsplash.com/400x250/?nature,eco",
      content: "Details about Sustainable Living...",
    },
    {
      id: 3,
      title: "How AI is Transforming Education",
      category: "Education",
      date: "2025-03-15",
      image: "https://source.unsplash.com/400x250/?technology,education",
      content: "Insights into AI in Education...",
    },
    {
      id: 4,
      title: "Mental Health Awareness",
      category: "Health",
      date: "2025-03-20",
      image: "https://source.unsplash.com/400x250/?mentalhealth,therapy",
      content: "Important facts on Mental Health...",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-green-50 min-h-screen relative">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-green-700 text-center mb-2"
      >
        Latest Blogs
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
            onClick={() => setSelectedCategory(category)}
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
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
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

export default Blogs;
