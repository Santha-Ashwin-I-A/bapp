import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const quizData = [
  { question: "Where did Bhuphesh and Gobica first meet?", options: ["College", "Cafe", "Park", "Online"], answer: "College" },
  { question: "What is Gobica’s favorite color?", options: ["Pink", "Blue", "Red", "Green"], answer: "Pink" },
  { question: "Which pet does Gobica love the most?", options: ["Dog", "Cat", "Rabbit", "Bird"], answer: "Cat" },
];

const GameQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 text-center p-6 overflow-hidden">
      
      {/* Floating Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_10%,transparent_50%)] pointer-events-none animate-pulse"></div>

      {/* Title Animation */}
      <motion.h1
        className="text-4xl font-extrabold text-white drop-shadow-lg mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🎮 Fun Quiz Time! 🎮
      </motion.h1>

      {/* Quiz Box */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md"
      >
        {!showResult ? (
          <>
            {/* Question Animation */}
            <motion.h2
              className="text-xl font-bold text-pink-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {quizData[currentQuestion].question}
            </motion.h2>

            {/* Options */}
            <div className="mt-4">
              {quizData[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="block w-full bg-pink-300 text-white rounded-lg py-3 my-2 shadow-md hover:bg-pink-400 transition transform hover:scale-105"
                  whileTap={{ scale: 0.95 }}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Result Animation */}
            <motion.h2
              className="text-2xl font-bold text-pink-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              🎉 Quiz Completed! 🎉
            </motion.h2>

            <p className="text-lg mt-2">You scored <b>{score}</b> out of {quizData.length}!</p>

            <motion.button
              onClick={() => navigate("/final-message")}
              className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Next: Final Message 💌
            </motion.button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default GameQuiz;
