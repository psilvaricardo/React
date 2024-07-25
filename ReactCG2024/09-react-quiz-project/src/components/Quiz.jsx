import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompletedImg from "../assets/quiz-complete.png";

const Quiz = () => {
    // index-based logic to render the questions to the user.
    // example: 2 answers given means 2 question answered
    // and next question should be third, and index = 2
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    // let's find out whether the quiz is over or not
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectedAnswer = (selectedAnswer) => {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    };

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompletedImg} alt="Trophy icon" />
                <h2>Quiz Completed</h2>
            </div>
        );
    }

    // let's create a copy of the original array where we have all the answers
    // because I want to keep my original array as it is, I know I have the right
    // answer in the first element and I will use that information later.
    const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    // I want to make sure to shuffle those answers, so they are not
    // always presented in the same order. Sort will not return a new array,
    // but instead it will edit the same array,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    shuffleAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffleAnswers.map((answer) => (
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
