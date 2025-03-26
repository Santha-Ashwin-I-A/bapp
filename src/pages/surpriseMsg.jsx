import React, { useState, useEffect } from "react";
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-200 text-center p-6">
      <h2 className="text-4xl font-bold text-pink-700 animate-bounce">
        🎉 Surprise! 🎉
      </h2>

      {showMessage ? (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-lg max-w-md">
          <p className="text-lg font-semibold text-gray-800">
            Dear <span className="text-pink-600">Gobica</span>,  
          </p>
          <p className="mt-2 text-gray-700">
            You are the most special person in my life. Every moment with you is a treasure!  
            Today is all about celebrating you. 🎂💕  
          </p>
          <p className="mt-4 font-bold text-pink-500">Happy Birthday! 🎈</p>
        </div>
      ) : (
        <p className="mt-6 text-lg text-pink-600 animate-pulse">
          Loading your special message... 🎁
        </p>
      )}

      <button
        className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
        onClick={() => navigate("/memory-lane")}
      >
        Go to Memory Lane 📸
      </button>
      <Link to="/gift">
              <button className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md mt-4">
                See gift 🎁
              </button>
      </Link>
    </div>
  );
};

export default SurpriseMessage;
