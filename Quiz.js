import React, { useState } from "react";
import "./Quiz.css"; // Add this file for styling

const Quiz = () => {
    const questions = [
        {
            question: "1. What does AI stand for?",
            options: ["Artificial Imagination", "Automated Intelligence", "Artificial Intelligence", "Autonomous Integration"],
            answer: "Artificial Intelligence"
        },
        {
            question: "2. Which type of AI can perform tasks similar to humans?",
            options: ["Narrow AI", "General AI", "Supervised AI", "Reinforcement AI"],
            answer: "General AI"
        },
        {
            question: "3. Which AI model is developed by OpenAI?",
            options: ["AlphaZero", "BERT", "ChatGPT", "Watson"],
            answer: "ChatGPT"
        },
        {
            question: "4. What is overfitting in AI?",
            options: ["Good performance on all data", "Poor performance on training data", "Over-simplifying a model", "Good performance on training data but poor on new data"],
            answer: "Good performance on training data but poor on new data"
        },
        {
            question: "5. Which AI technique is inspired by human learning through experiences?",
            options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Deep Learning"],
            answer: "Reinforcement Learning"
        },
        {
            question: "6. What is the goal of AI?",
            options: ["To simulate human intelligence", "To automate all human tasks", "To replace humans", "To build machines that don't require programming"],
            answer: "To simulate human intelligence"
        },
        {
            question: "7. Which of the following is an application of AI?",
            options: ["Self-driving cars", "Spreadsheets", "Manual labor", "None of the above"],
            answer: "Self-driving cars"
        },
        {
            question: "8. What is a neural network?",
            options: ["A network of computers", "A network of human brains", "A machine learning model inspired by the human brain", "A social network for AI experts"],
            answer: "A machine learning model inspired by the human brain"
        },
        {
            question: "9. What is machine learning?",
            options: ["Programming machines to perform tasks", "Teaching computers to learn from data", "Building robots", "Designing games with AI"],
            answer: "Teaching computers to learn from data"
        },
        {
            question: "10. Which type of AI is used in facial recognition?",
            options: ["Narrow AI", "General AI", "Weak AI", "Supervised AI"],
            answer: "Narrow AI"
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (option) => {
        setSelectedAnswer(option);
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setTimeout(() => {
            setSelectedAnswer(null);
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                alert(`Quiz completed! Your score: ${score + 1}/${questions.length}`);
                setCurrentQuestion(0);
                setScore(0);
            }
        }, 1000);
    };

    return (
        <div className="quiz-container">
            

            <h2 className="heading1">Flashcard Quiz</h2>
            <div className="question-box">
                <h3>{questions[currentQuestion].question}</h3>
            </div>
            <div className="options-container">
                {questions[currentQuestion].options.map((option, index) => (
                    <button
                        key={index}
                        className={`option-btn ${selectedAnswer === option ? 
                            (option === questions[currentQuestion].answer ? "correct" : "wrong") : ""}`}
                        onClick={() => handleAnswerClick(option)}
                        disabled={selectedAnswer !== null}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {/* Score Box */}
            <div className="score-box">
                <h3>Score: {score}</h3>  {/* Display score */}
            </div>
        </div>
    );
};

export default Quiz;
