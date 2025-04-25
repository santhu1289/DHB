import { motion } from "framer-motion";
import { FaHospital, FaStethoscope } from "react-icons/fa";

const FloatingBackground = () => {
  const floatingVariants = {
    animate: {
      y: [0, 20, 0], // Moves up and down
      rotate: [0, 5, -5, 0], // Subtle rotation
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Floating Hospital Icons */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-10 left-40 text-green-400 text-8xl opacity-10"
      >
        <FaStethoscope />
      </motion.div>

      {/* <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 right-10 text-red-400 text-7xl opacity-30"
      >
        <FaAmbulance />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-40 text-blue-500 text-6xl opacity-30"
      >
        <FaHeart />
      </motion.div>
*/}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 left-10 text-gray-500 text-8xl opacity-20"
      >
        <FaHospital />
      </motion.div> 
    </div>
  );
};

export default FloatingBackground;
