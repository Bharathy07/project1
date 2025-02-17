import React, { useState } from "react";
import "./Quiz.css"; // Add this file for styling

const Quiz = () => {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "London", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is 2 + 2?",
            options: ["3","5", "4", "6"],
            answer: "4"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Mars", "Venus", "Earth", "Jupiter"],
            answer: "Jupiter"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["J.K. Rowling", "Mark Twain", "Harper Lee", "Ernest Hemingway"],
            answer: "Harper Lee"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Ag", "Fe", "Au", "Pb"],
            answer: "Au"
        },
        {
            question: "How many continents are there on Earth?",
            options: ["5", "7", "8", "6"],
            answer: "7"
        },
        {
            question: "Which ocean is the largest?",
            options: ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"],
            answer: "Pacific"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Van Gogh", "Leonardo da Vinci", "Rembrandt", "Pablo Picasso"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the square root of 64?",
            options: ["6", "7", "8", "9"],
            answer: "8"
        },
        {
            question: "What year did the first man land on the moon?",
            options: ["1969","1959",  "1979", "1989"],
            answer: "1969"
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
        </div>
    );
};

export default Quiz;
