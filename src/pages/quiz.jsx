import { useState } from "react";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center p-4">
      {!showResult ? (
        <div className="bg-white p-6 rounded-xl shadow-xl w-80">
          <h2 className="text-xl font-bold text-pink-600">{quizData[currentQuestion].question}</h2>
          <div className="mt-4">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="block w-full bg-pink-300 text-white rounded-lg py-2 my-2 hover:bg-pink-400 transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-xl w-80">
          <h2 className="text-2xl font-bold text-pink-600">🎉 Quiz Completed! 🎉</h2>
          <p className="text-lg mt-2">You scored {score} out of {quizData.length}!</p>
          <button
            onClick={() => navigate("/final-message")}
            className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
          >
            Next: Final Message
          </button>
        </div>
      )}
    </div>
  );
};

export default GameQuiz;
