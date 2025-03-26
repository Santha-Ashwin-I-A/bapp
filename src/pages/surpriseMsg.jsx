import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SurpriseMessage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 2000); // Message appears after 2 seconds for a surprise effect
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-pink-400 text-center p-6 overflow-hidden">
      
      {/* Floating Particles Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_10%,transparent_50%)] pointer-events-none animate-pulse"></div>

      {/* Animated Surprise Title */}
      <motion.h2
        className="text-4xl font-extrabold text-white drop-shadow-lg animate-bounce"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🎉 Surprise! 🎉
      </motion.h2>

      {showMessage ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-6 p-6 bg-white rounded-lg shadow-xl max-w-md"
        >
          <p className="text-lg font-semibold text-gray-800">
            Dear <span className="text-pink-600">Gobica</span>,  
          </p>
          <p className="mt-2 text-gray-700">
            You are the most special person in my life. Every moment with you is a treasure!  
            Today is all about celebrating you. 🎂💕  
          </p>
          <p className="mt-4 font-bold text-pink-500">Happy Birthday! 🎈</p>
        </motion.div>
      ) : (
        <motion.p
          className="mt-6 text-lg text-white animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          Loading your special message... 🎁
        </motion.p>
      )}

      {/* Buttons with Hover Effects */}
      <div className="mt-6 flex flex-col space-y-4">
        <motion.button
          onClick={() => navigate("/memory-lane")}
          className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md transition transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Go to Memory Lane 📸
        </motion.button>

        <Link to="/gift">
          <motion.button
            className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            See gift 🎁
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default SurpriseMessage;
