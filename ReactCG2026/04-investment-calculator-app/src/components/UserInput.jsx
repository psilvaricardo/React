import { useState } from "react";

export const UserInput = () => {
    // for managing this state, I will
    // one state object that merges all
    // the input fields
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000, // USD
        annualInvestment: 1200, // USD
        expectedReturn: 6, // percent
        duration: 10,
    });

    const onChangeHandler = (inputId, newValue) => {
        setUserInput((prevUserInput) => {
            return {
                // spreading the old user input info so we copy the old values
                ...prevUserInput,
                // and we just update the value we need, the one updated.
                inputId: newValue,
            };
        });
    };

    return (
        <section id="user-input">
            <div id="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(e) =>
                            onChangeHandler("initialInvestment", e.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(e) =>
                            onChangeHandler("annualInvestment", e.target.value)
                        }
                    />
                </p>
            </div>
            <div id="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(e) =>
                            onChangeHandler("expectedReturn", e.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(e) =>
                            onChangeHandler("duration", e.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    );
};
