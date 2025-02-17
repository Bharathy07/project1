import React, { useState } from "react";
import "./Flashcard.css"; // Optional for styling

const Flashcard = ({ flashcard }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <h3>{flashcard.question}</h3>
                </div>
                <div className="flashcard-back">
                    <p>{flashcard.answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;