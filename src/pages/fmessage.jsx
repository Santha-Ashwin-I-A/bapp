import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { motion } from "framer-motion";

const FinalMessage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();
  const [width, height] = useWindowSize();

  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 1000);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 text-center p-6 overflow-hidden">
      {showConfetti && <Confetti width={width} height={height} />}
      
      {/* Sparkle Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_10%,transparent_50%)] pointer-events-none animate-pulse"></div>

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-extrabold text-white drop-shadow-lg mb-4"
      >
        💖 Surprise for You, Gobica! 💖
      </motion.h1>

      {/* Love Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-4 text-lg text-white max-w-lg font-light"
      >
        "From the moment we met, my world became brighter. Every smile, every memory, and every second with you is precious to me.  
        You are the most special person in my life, and I want to celebrate this love forever.  
        Happy Birthday, my love! 🎂💞"  
      </motion.p>

      {/* Love Signature */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-xl font-semibold text-white mt-6"
      >
        - With love, Bhuphesh ❤️
      </motion.p>

      {/* Surprise Button */}
      <motion.button
        onClick={() => navigate("/special-surprise")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-pink-500 px-6 py-3 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all"
      >
        🎁 See Your Special Surprise! 🎁
      </motion.button>
    </div>
  );
};

export default FinalMessage;
