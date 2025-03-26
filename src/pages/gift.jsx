import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GiftReveal = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const [width, height] = useWindowSize();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 text-center p-6 overflow-hidden">
      {opened && <Confetti width={width} height={height} />}
      
      {/* Sparkle Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_10%,transparent_50%)] pointer-events-none animate-pulse"></div>

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-extrabold text-white drop-shadow-lg mb-6"
      >
        🎁 A Special Gift for You! 🎁
      </motion.h1>

      {/* Gift Box Animation */}
      {!opened ? (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white p-10 rounded-xl shadow-xl cursor-pointer transition-all"
          onClick={() => setOpened(true)}
        >
          <motion.img 
            src="/gift-box.png" 
            alt="Gift Box" 
            className="w-40 h-40"
            initial={{ y: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
          <p className="text-pink-500 mt-2 font-semibold animate-pulse">Tap to Open</p>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-white rounded-xl shadow-xl"
        >
          <img src="/gift-revealed.png" alt="Gift Revealed" className="w-60 h-60" />
          <p className="text-lg text-pink-600 mt-4 font-medium">
            Surprise! 🎉 Bhuphesh has something special for you! 💖
          </p>
        </motion.div>
      )}

      {/* Buttons */}
      {opened && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col gap-4 mt-6"
        >
          <button
            onClick={() => navigate("/memory-lane")}
            className="px-6 py-3 bg-white text-pink-500 font-semibold rounded-full shadow-md transition-all hover:bg-pink-500 hover:text-white text-lg"
          >
            📸 Next: Memory Lane
          </button>
          <Link to="/quiz">
            <button className="px-6 py-3 bg-white text-pink-500 font-semibold rounded-full shadow-md transition-all hover:bg-pink-500 hover:text-white text-lg">
              🧠 Start Quiz
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default GiftReveal;
