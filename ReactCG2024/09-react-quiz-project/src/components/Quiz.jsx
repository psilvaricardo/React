import { useState } from "react";

const Quiz = () => {
    // index-based logic to render the questions to the user.
    // example: 2 answers given means 2 question answered
    // and next question should be third, and index = 2
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    return (
        <>
            <p>Currently Active Question</p>
        </>
    );
};

export default Quiz;
