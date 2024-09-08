import React, { useState } from "react";
import "./index.css";

const modules = {
  math: [
    // 15 Math questions
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    {
      question: "What is the square root of 16?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is 5 * 6?",
      options: ["28", "30", "35", "40"],
      answer: "30",
    },
    {
      question: "What is 12 * 12?",
      options: ["144", "154", "164", "174"],
      answer: "144",
    },
    {
      question: "What is the derivative of x^2?",
      options: ["x", "2x", "x^2", "1"],
      answer: "2x",
    },
    {
      question: "What is the integral of 2x dx?",
      options: ["x^2 + C", "2x + C", "x^2/2 + C", "2x^2 + C"],
      answer: "x^2 + C",
    },
    {
      question: "What is 8 * 7?",
      options: ["54", "56", "58", "60"],
      answer: "56",
    },
    {
      question: "What is 100 divided by 4?",
      options: ["25", "24", "23", "22"],
      answer: "25",
    },
    {
      question: "What is 2 to the power of 5?",
      options: ["16", "32", "64", "128"],
      answer: "32",
    },
    {
      question: "What is the value of π (Pi) approximately?",
      options: ["3.12", "3.14", "3.16", "3.18"],
      answer: "3.14",
    },
    {
      question: "What is the square root of 81?",
      options: ["7", "8", "9", "10"],
      answer: "9",
    },
    {
      question: "What is log(100) to base 10?",
      options: ["1", "2", "10", "100"],
      answer: "2",
    },
    {
      question: "Solve: 5x = 25.",
      options: ["x = 1", "x = 2", "x = 3", "x = 5"],
      answer: "x = 5",
    },
    {
      question: "What is the sum of the angles in a triangle?",
      options: ["90", "180", "270", "360"],
      answer: "180",
    },
    {
      question: "What is the formula for the area of a circle?",
      options: ["πr^2", "2πr", "πd", "r^2"],
      answer: "πr^2",
    },
  ],
  biology: [
    // 15 Biology questions
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      answer: "Mitochondria",
    },
    {
      question: "What is the process by which plants make food?",
      options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
      answer: "Photosynthesis",
    },
    {
      question: "Which blood cells fight infections?",
      options: ["Red", "White", "Platelets", "Plasma"],
      answer: "White",
    },
    {
      question: "What is the basic unit of life?",
      options: ["Cell", "Tissue", "Organ", "Organism"],
      answer: "Cell",
    },
    {
      question: "What is DNA short for?",
      options: [
        "Deoxyribonucleic Acid",
        "Deoxyribose Acid",
        "Dioxynucleic Acid",
        "Dioxyribose Acid",
      ],
      answer: "Deoxyribonucleic Acid",
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Liver", "Skin", "Brain", "Heart"],
      answer: "Skin",
    },
    {
      question: "What is the study of fungi called?",
      options: ["Botany", "Zoology", "Mycology", "Microbiology"],
      answer: "Mycology",
    },
    {
      question: "Which organ is responsible for filtering blood?",
      options: ["Heart", "Liver", "Kidney", "Lung"],
      answer: "Kidney",
    },
    {
      question: "What type of blood cells are involved in clotting?",
      options: ["Red", "White", "Platelets", "Plasma"],
      answer: "Platelets",
    },
    {
      question: "What does ATP stand for?",
      options: [
        "Adenosine Tri-phosphate",
        "Adenine Tri-phosphate",
        "Adenosine Di-phosphate",
        "Adenine Di-phosphate",
      ],
      answer: "Adenosine Tri-phosphate",
    },
    {
      question: "Which part of the plant conducts photosynthesis?",
      options: ["Roots", "Stem", "Leaves", "Flowers"],
      answer: "Leaves",
    },
    {
      question:
        "Which vitamin is produced when a person is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      answer: "Vitamin D",
    },
    {
      question: "Which organ produces insulin?",
      options: ["Liver", "Pancreas", "Kidney", "Heart"],
      answer: "Pancreas",
    },
    {
      question: "What is the main gas inhaled by humans?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
      answer: "Oxygen",
    },
    {
      question: "Which part of the brain controls balance?",
      options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
      answer: "Cerebellum",
    },
  ],
  chemistry: [
    // 15 Chemistry questions
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "NaCl"],
      answer: "H2O",
    },
    {
      question: "What is the pH level of pure water?",
      options: ["5", "7", "9", "12"],
      answer: "7",
    },
    {
      question: "What is the atomic number of Carbon?",
      options: ["6", "8", "12", "14"],
      answer: "6",
    },
    {
      question: "What is the main component of natural gas?",
      options: ["Methane", "Ethane", "Propane", "Butane"],
      answer: "Methane",
    },
    {
      question: "What type of bond is formed by the sharing of electrons?",
      options: ["Ionic", "Covalent", "Hydrogen", "Metallic"],
      answer: "Covalent",
    },
    {
      question: "Which element has the chemical symbol 'Na'?",
      options: ["Nitrogen", "Sodium", "Nickel", "Neon"],
      answer: "Sodium",
    },
    {
      question: "What is the most abundant gas in the Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Nitrogen",
    },
    {
      question: "Which acid is commonly found in vinegar?",
      options: [
        "Hydrochloric acid",
        "Acetic acid",
        "Citric acid",
        "Sulfuric acid",
      ],
      answer: "Acetic acid",
    },
    {
      question: "What is Avogadro's number?",
      options: [
        "6.022 × 10^23",
        "3.141 × 10^23",
        "1.602 × 10^-19",
        "9.81 × 10^3",
      ],
      answer: "6.022 × 10^23",
    },
    {
      question: "What does pH stand for?",
      options: [
        "Potential Hydrogen",
        "Potential Helium",
        "Potential Hydroxide",
        "Potential Heat",
      ],
      answer: "Potential Hydrogen",
    },
    {
      question: "Which metal is liquid at room temperature?",
      options: ["Gold", "Silver", "Mercury", "Lead"],
      answer: "Mercury",
    },
    {
      question: "What is the molecular formula for glucose?",
      options: ["C6H12O6", "C12H22O11", "CH4", "C2H5OH"],
      answer: "C6H12O6",
    },
    {
      question: "What is the process of converting a solid to a gas called?",
      options: ["Melting", "Evaporation", "Sublimation", "Condensation"],
      answer: "Sublimation",
    },
    {
      question: "What is the common name for sodium bicarbonate?",
      options: ["Table salt", "Baking soda", "Vinegar", "Bleach"],
      answer: "Baking soda",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      answer: "Diamond",
    },
  ],
  computerScience: [
    // 15 Computer Science questions
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HyperTool Multi Language",
        "HyperText Markdown Language",
        "HyperTool Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "Which language is known as the backbone of the web?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "What is the main function of an Operating System?",
      options: [
        "To compile code",
        "To manage hardware",
        "To develop software",
        "To write code",
      ],
      answer: "To manage hardware",
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O(log n)",
    },
    {
      question: "What is a 'Class' in Object-Oriented Programming?",
      options: [
        "A type of function",
        "A data type",
        "A blueprint for objects",
        "A variable",
      ],
      answer: "A blueprint for objects",
    },
    {
      question: "Which company developed the Java programming language?",
      options: ["Microsoft", "Google", "Sun Microsystems", "Apple"],
      answer: "Sun Microsystems",
    },
    {
      question: "What does 'SQL' stand for?",
      options: [
        "Simple Query Language",
        "Structured Query Language",
        "Secure Query Language",
        "Statement Query Language",
      ],
      answer: "Structured Query Language",
    },
    {
      question: "Which sorting algorithm has the best average time complexity?",
      options: [
        "Bubble Sort",
        "Merge Sort",
        "Selection Sort",
        "Insertion Sort",
      ],
      answer: "Merge Sort",
    },
    {
      question: "What is the purpose of the TCP protocol in networking?",
      options: [
        "To provide security",
        "To ensure reliable data transfer",
        "To format data",
        "To connect devices wirelessly",
      ],
      answer: "To ensure reliable data transfer",
    },
    {
      question: "What does the acronym 'CSS' stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
        "Creative Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "What is the primary function of a compiler?",
      options: [
        "To interpret code",
        "To execute code",
        "To convert source code into machine code",
        "To manage memory",
      ],
      answer: "To convert source code into machine code",
    },
    {
      question: "What does 'HTTP' stand for?",
      options: [
        "HyperText Transfer Protocol",
        "HyperText Transmission Protocol",
        "Hyper Transfer Text Protocol",
        "Hyper Tool Transfer Protocol",
      ],
      answer: "HyperText Transfer Protocol",
    },
    {
      question: "What is the purpose of DNS in networking?",
      options: [
        "To assign IP addresses",
        "To translate domain names to IP addresses",
        "To provide security",
        "To connect devices wirelessly",
      ],
      answer: "To translate domain names to IP addresses",
    },
    {
      question: "What is Big O notation used for?",
      options: [
        "To measure data storage",
        "To represent time complexity",
        "To count lines of code",
        "To encrypt data",
      ],
      answer: "To represent time complexity",
    },
    {
      question: "What is an IP address?",
      options: [
        "A type of domain",
        "A network device",
        "A unique identifier for a computer on a network",
        "A programming language",
      ],
      answer: "A unique identifier for a computer on a network",
    },
  ],
  // New modules with 15 questions each can be added here...
};

function QuizApp() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (answer) => {
    if (answer === modules[selectedModule][currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < modules[selectedModule].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleModuleChange = (module) => {
    setSelectedModule(module);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-app">
      <h1>Quiz App</h1>
      {!selectedModule ? (
        <div>
          <h2>Select a module to start the quiz:</h2>
          {Object.keys(modules).map((module) => (
            <button key={module} onClick={() => handleModuleChange(module)}>
              {module}
            </button>
          ))}
        </div>
      ) : quizCompleted ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>
            Your score is {score} out of {modules[selectedModule].length}
          </p>
          <button onClick={() => setSelectedModule(null)}>
            Try another module
          </button>
        </div>
      ) : (
        <div>
          <h2>{selectedModule} Quiz</h2>
          <h3>Question {currentQuestion + 1}</h3>
          <p>{modules[selectedModule][currentQuestion].question}</p>
          <div>
            {modules[selectedModule][currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
