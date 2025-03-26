import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 p-6 text-center">
      {showConfetti && <Confetti width={width} height={height} />}
      
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Happy Birthday, Gobica! 🎉</h1>
      <p className="text-lg text-gray-700 mb-6">
        A special surprise just for you from Bhuphesh! ❤️
      </p>
      
      <button
        className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-lg transition transform hover:scale-105"
        onClick={() => setShowConfetti(true)}
      >
        Click for a Surprise! 🎊
      </button>
      <Link to="/memory-lane">
        <button className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md mt-4">
          Go to Memory Lane
        </button>
      </Link>
      <Link to="/surprise-message">
        <button className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md mt-4">
          Read Surprise Message 🎁
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
