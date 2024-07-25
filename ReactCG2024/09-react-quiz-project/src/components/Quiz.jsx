import { useState } from "react";
import QUESTIONS from "../questions";

const Quiz = () => {
    // index-based logic to render the questions to the user.
    // example: 2 answers given means 2 question answered
    // and next question should be third, and index = 2
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const handleSelectedAnswer = (selectedAnswer) => {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    };

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                        <li key={answer} className="answer">
                            <button
                                onClick={() => {
                                    handleSelectedAnswer(answer);
                                }}
                            >
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Quiz;
