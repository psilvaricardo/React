import { useState } from "react";

import UserInput from "./components/UserInput";
import CustomHeader from "./components/Header/CustomHeader";
import Results from "./components/Results";

const App = () => {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    const handleChange = (inputIdentifier, newValue) => {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            };
        });
    };

    return (
        <>
            <CustomHeader />
            <UserInput onChangeInput={handleChange} userInput={userInput} />
            {!inputIsValid && (
                <p className="center">
                    Please enter a duration greater than zero.
                </p>
            )}
            {inputIsValid && <Results input={userInput} />}
        </>
    );
};

export default App;
