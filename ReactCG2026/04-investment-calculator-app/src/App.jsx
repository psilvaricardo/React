import { Header } from "./components/Header.jsx";
import { Results } from "./components/Results.jsx";
import { UserInput } from "./components/UserInput.jsx";
import { useState } from "react";

export const App = () => {
    // for managing this state, I will
    // one state object that merges all
    // the input fields
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000, // USD
        annualInvestment: 1200, // USD
        expectedReturn: 6, // percent
        duration: 10, // years
    });

    const onChangeHandler = (inputIdKey, newValue) => {
        setUserInput((prevUserInput) => {
            return {
                // spreading the old user input info so we copy the old values
                ...prevUserInput,
                // and we just update the value we need, the one updated.
                // I dynamically determine the property name from the value 
                // of [inputIdKey] variable, because JavaScript evaluates the 
                // expression inside the square brackets.
                // and adding the plus + symbol will force a conversion to 'number'
                [inputIdKey]: +newValue,
            };
        });
    };

    return (
        <>
            <Header />
            <UserInput
                userInput={userInput}
                onChangeHandler={onChangeHandler}
            />
            <Results userInput={userInput} />
        </>
    );
};
