import { useState, useCallback } from "react";
import Summary from "./Summary";
import Question from "./Question";
import QUESTIONS from "../questions";

const Quiz = () => {
    // index-based logic to render the questions to the user.
    // example: 2 answers given means 2 question answered
    // and next question should be third, and index = 2
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    // let's find out whether the quiz is over or not
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectedAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectedAnswer(null),
        [handleSelectedAnswer]
    );

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                questionIndex={activeQuestionIndex}
                onSelectAnswer={handleSelectedAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
};

export default Quiz;
