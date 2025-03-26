import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const GiftReveal = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center p-4">
      {opened && <Confetti />}
      
      <h1 className="text-3xl font-bold text-pink-600 mb-4">🎁 A Special Gift for You! 🎁</h1>

      {!opened ? (
        <div
          className="bg-white p-10 rounded-xl shadow-xl cursor-pointer transition transform hover:scale-105"
          onClick={() => setOpened(true)}
        >
          <img src="/gift-box.png" alt="Gift Box" className="w-40 h-40" />
          <p className="text-pink-500 mt-2">Tap to Open</p>
        </div>
      ) : (
        <div className="p-6 bg-white rounded-xl shadow-xl">
          <img src="/gift-revealed.png" alt="Gift Revealed" className="w-60 h-60" />
          <p className="text-lg text-pink-600 mt-4">Surprise! 🎉 Bhuphesh has something special for you! 💖</p>
          <button
            onClick={() => navigate("/memory-lane")}
            className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
          >
            Next: Memory Lane
          </button>
        </div>
      )}
      <Link to="/quiz">
              <button className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md mt-4">
                Start Quiz 
              </button>
      </Link>
    </div>
  );
};

export default GiftReveal;
