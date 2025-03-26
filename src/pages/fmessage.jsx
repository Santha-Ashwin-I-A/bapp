import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const FinalMessage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 1000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center p-6">
      {showConfetti && <Confetti />}
      
      <h1 className="text-4xl font-bold text-pink-600 animate-pulse">💖 Surprise for You, Gobica! 💖</h1>

      <p className="mt-4 text-lg text-gray-700 max-w-lg">
        "From the moment we met, my world became brighter. Every smile, every memory, and every second with you is precious to me.  
        You are the most special person in my life, and I want to celebrate this love forever.  
        Happy Birthday, my love! 🎂💞"  
      </p>

      <p className="text-xl font-semibold text-pink-500 mt-6">- With love, Bhuphesh ❤️</p>

      <button
        onClick={() => navigate("/special-surprise")}
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition text-lg"
      >
        🎁 See Your Special Surprise! 🎁
      </button>
    </div>
  );
};

export default FinalMessage;
