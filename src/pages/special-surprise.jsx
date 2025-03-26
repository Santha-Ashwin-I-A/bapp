import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const SpecialSurprise = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 1000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center p-6">
      {showConfetti && <Confetti />}

      <h1 className="text-4xl font-bold text-pink-600 animate-pulse">🎉 Your Special Surprise, Gobica! 🎉</h1>

      {/* Video Message Section */}
      <div className="mt-6">
        <video controls className="w-full max-w-md rounded-lg shadow-lg">
          <source src="/video/surprise.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-600 mt-2">🎥 A special message from Bhuphesh 💖</p>
      </div>

      {/* Memory Scrapbook */}
      <div className="mt-6 w-full max-w-lg overflow-hidden rounded-lg shadow-lg">
        <img src="/images/memory1.jpg" alt="Memory 1" className="w-full h-auto rounded-lg" />
        <p className="text-sm text-gray-600 mt-2">📸 Memories that last forever...</p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition text-lg"
      >
        🎊 The End 🎊
      </button>
    </div>
  );
};

export default SpecialSurprise;
