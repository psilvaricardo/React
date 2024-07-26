import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

const TIMEOUT_DUARATION = 10000; // 10 seconds in milliseconds.

const Question = ({
    questionText,
    answers,
    onSelectAnswer,
    selectedAnswer,
    answerState,
    onSkipAnswer,
}) => {
    return (
        <div id="question">
            <QuestionTimer
                timeout={TIMEOUT_DUARATION}
                onTimeout={onSkipAnswer}
            />
            <h2>{questionText}</h2>
            <Answers
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={onSelectAnswer}
            />
        </div>
    );
};

export default Question;
