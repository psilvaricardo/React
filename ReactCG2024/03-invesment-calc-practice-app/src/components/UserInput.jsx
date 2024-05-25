import { useState } from "react";
import './UserInput.css';

const UserInput = () => {
    const [UserInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const handleChange = (inputIdentifier, newValue) => {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            };
        });
    };

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Invesment</label>
                    <input
                        type="number"
                        value={UserInput.initialInvestment}
                        required
                        onChange={(e) =>
                            handleChange("initialInvestment", e.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Annual Invesment</label>
                    <input
                        type="number"
                        value={UserInput.annualInvestment}
                        required
                        onChange={(e) =>
                            handleChange("annualInvestment", e.target.value)
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        value={UserInput.expectedReturn}
                        required
                        onChange={(e) =>
                            handleChange("expectedReturn", e.target.value)
                        }
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        value={UserInput.duration}
                        required
                        onChange={(e) =>
                            handleChange("duration", e.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    );
};

export default UserInput;
