import { useState } from "react";
import Answers from "./Answers";
import QUESTIONS from "../questions";
import QuestionTimer from "./QuestionTimer";

const Question = ({ questionIndex, onSelectAnswer, onSkipAnswer }) => {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null,
    });

    // Setting different timers based on timing the user is answering questions.
    let TIMEOUT_DUARATION = 10000; // 10 seconds in milliseconds.
    if (answer.selectedAnswer) {
        TIMEOUT_DUARATION = 1000;
    }

    if (answer.isCorrect !== null) {
        TIMEOUT_DUARATION = 2000;
    }

    const handleSelectAnswer = (answer) => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    };

    let answerState = "";
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.selectedAnswer) {
        answerState = "answered";
    }

    return (
        <div id="question">
            <QuestionTimer
                key={TIMEOUT_DUARATION}
                timeout={TIMEOUT_DUARATION}
                onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
                mode={answerState}
            />
            <h2>{QUESTIONS[questionIndex].text}</h2>
            <Answers
                answers={QUESTIONS[questionIndex].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
};

export default Question;
