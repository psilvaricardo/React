import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
    const shuffleAnswers = useRef();

    // If shuffleAnswers.current is undefined, I only want to execute this code once
    // meaning, I'm just shuffle the answers only one time..!!
    if (!shuffleAnswers.current) {
        // let's create a copy of the original array where we have all the answers
        // because I want to keep my original array as it is, I know I have the right
        // answer in the first element and I will use that information later.
        shuffleAnswers.current = [...answers];
        // I want to make sure to shuffle those answers, so they are not
        // always presented in the same order. Sort will not return a new array,
        // but instead it will edit the same array,
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        shuffleAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffleAnswers.current.map((answer) => {
                let cssClass = "";
                const isSelected = selectedAnswer === answer;

                switch (answerState) {
                    case "answered":
                        if (isSelected) {
                            cssClass = "selected";
                        }
                        break;
                    case "correct":
                    case "wrong":
                        if (isSelected) {
                            cssClass = answerState;
                        }
                        break;
                    default:
                        break;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            disabled={answerState !== ''}
                            className={cssClass}
                            onClick={() => {
                                onSelect(answer);
                            }}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Answers;
