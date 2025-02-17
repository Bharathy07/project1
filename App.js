import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Quiz from "./components/Quiz";
import "./App.css";  // Your app styling

const App = () => {
    return (
        <Router>
            <div>
                <Routes> 
                    {/* Quiz Page will be shown on the /quiz route */}
                    <Route path="/quiz" element={<Quiz />} />
                    
                    
                </Routes>
            </div>
        </Router>
    );
};

export default App;
