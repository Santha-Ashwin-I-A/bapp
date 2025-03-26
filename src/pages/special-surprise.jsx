import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const SpecialSurprise = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 1000);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 text-center p-6 overflow-hidden">
      
      {/* Confetti Celebration */}
      {showConfetti && <Confetti />}

      {/* Glowing Background Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_10%,transparent_50%)] pointer-events-none animate-pulse"></div>

      {/* Animated Title */}
      <motion.h1
        className="text-4xl font-extrabold text-white drop-shadow-lg mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🎉 Your Special Surprise, Gobiga! 🎉
      </motion.h1>

      {/* Video Surprise Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-6 w-full max-w-md rounded-lg shadow-xl overflow-hidden"
      >
       
          <img src="/bhu.jpg" alt="Gift Revealed" className="w-60 h-60" />
        <p className="text-sm text-gray-100 mt-2">🎥 A special message from Bhuphesh 💖</p>
      </motion.div>

      {/* Memory Scrapbook Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 w-full max-w-lg rounded-lg shadow-xl overflow-hidden"
      >
        <img src="/images/memory1.jpg" alt="Memory 1" className="w-full h-auto rounded-lg" />
        <p className="text-sm text-gray-100 mt-2">📸 Memories that last forever...</p>
      </motion.div>

      {/* End Button with Hover Effect */}
      <motion.button
        onClick={() => navigate("/")}
        className="bg-white text-pink-500 px-6 py-3 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all"
        whileHover={{ scale: 1.1 }}
      >
        🎊 The End 🎊
      </motion.button>
    </div>
  );
};

export default SpecialSurprise;
