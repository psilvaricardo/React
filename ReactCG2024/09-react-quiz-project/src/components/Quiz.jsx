import { useState, useCallback } from "react";
import Question from "./Question";
import QUESTIONS from "../questions";
import quizCompletedImg from "../assets/quiz-complete.png";

const Quiz = () => {
    // index-based logic to render the questions to the user.
    // example: 2 answers given means 2 question answered
    // and next question should be third, and index = 2
    const [userAnswers, setUserAnswers] = useState([]);
    // adding more state to highlight correct/incorrect answers
    const [answerState, setAnswerState] = useState("");
    const activeQuestionIndex =
        answerState === "" ? userAnswers.length : userAnswers.length - 1;
    // let's find out whether the quiz is over or not
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectedAnswer = useCallback(
        (selectedAnswer) => {
            setAnswerState("answered");
            setUserAnswers((prevUserAnswer) => {
                return [...prevUserAnswer, selectedAnswer];
            });

            const answerTimeout = setTimeout(() => {
                // check if the selected answer is correct
                if (
                    selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]
                ) {
                    setAnswerState("correct");
                } else {
                    setAnswerState("wrong");
                }

                setTimeout(() => {
                    // make sure we reset the state
                    setAnswerState("");
                }, 2000);
            }, 1000);
        },
        [activeQuestionIndex]
    );

    const handleSkipAnswer = useCallback(
        () => handleSelectedAnswer(null),
        [handleSelectedAnswer]
    );

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompletedImg} alt="Trophy icon" />
                <h2>Quiz Completed</h2>
            </div>
        );
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                questionText={QUESTIONS[activeQuestionIndex].text}
                answers={QUESTIONS[activeQuestionIndex].answers}
                onSelectAnswer={handleSelectedAnswer}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
};

export default Quiz;
