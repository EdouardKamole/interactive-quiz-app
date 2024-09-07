import React, { useState } from "react";
import "./index.css";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To be, or not to be'?",
    options: ["Shakespeare", "Hemingway", "Frost", "Poe"],
    answer: "Shakespeare",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Osmium", "Oganesson"],
    answer: "Oxygen",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1898", "1923"],
    answer: "1912",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    answer: "Tokyo",
  },
  {
    question:
      "Which organ in the human body is primarily responsible for filtering blood?",
    options: ["Liver", "Heart", "Kidneys", "Lungs"],
    answer: "Kidneys",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2",
  },
];

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const startQuiz = () => {
    setIsQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <div className="app">
      {!isQuizStarted && (
        <div className="start-screen">
          <h1>Welcome to the Quiz!</h1>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      )}

      {isQuizStarted && !isQuizFinished && (
        <div className="quiz-screen">
          <h2>{quizQuestions[currentQuestionIndex].question}</h2>
          <div className="options">
            {quizQuestions[currentQuestionIndex].options.map(
              (option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {isQuizFinished && (
        <div className="result-screen">
          <h2>Quiz Finished!</h2>
          <p>
            Your Score: {score} / {quizQuestions.length}
          </p>
          <button onClick={startQuiz}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
