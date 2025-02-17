import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css"; // Import styles

const StartPage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/quiz"); // Navigate to Quiz Page
    };

    return (
        <div className="start-container">
            <h1 className="heading">Welcome to the Flashcard Quiz!</h1>
            <p className="description">
                Test your knowledge with our interactive flashcards.
            </p>
            <button className="start-btn" onClick={handleStart}>
                Start Quiz
            </button>
        </div>
    );
};

export default StartPage;

