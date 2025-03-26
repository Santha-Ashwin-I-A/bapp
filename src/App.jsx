import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    // Auto-show confetti for 3 seconds on page load
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-200 to-pink-400 text-center overflow-hidden">
      {showConfetti && <Confetti width={width} height={height} />}

      {/* Sparkles effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_10%,transparent_50%)] pointer-events-none animate-pulse"></div>

      {/* Animated Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-extrabold text-white drop-shadow-lg mb-4"
      >
        Happy Birthday, Gobiga! 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-lg text-white font-light mb-6 px-4"
      >
        A special surprise just for you from Bhuphesh! ❤️
      </motion.p>

      {/* Surprise Button */}
      <motion.button
        className="bg-white text-pink-500 font-semibold px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-110 hover:bg-pink-500 hover:text-white"
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowConfetti(true)}
      >
        Click for a Surprise! 🎊
      </motion.button>

      {/* Navigation Buttons */}
      <div className="mt-6 space-y-4">
        <Link to="/memory-lane">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-pink-500 px-6 py-3 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all"
          >
            Go to Memory Lane 📸
          </motion.button>
        </Link>

        <Link to="/surprise-message">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-pink-500 px-6 py-3 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all"
          >
            Read Surprise Message 🎁
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
