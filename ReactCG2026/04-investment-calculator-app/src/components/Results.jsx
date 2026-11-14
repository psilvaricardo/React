import { calculateInvestmentResults, formatter } from "../util/investment.js";

export const Results = ({ userInput, isValid }) => {
    const resultData = isValid ? calculateInvestmentResults(userInput) : [];

    const initialInvestment = userInput.initialInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

            <tbody>
                {!isValid ? (
                    <tr>
                        <td colSpan={5} className="center">
                            Please enter a duration greater than zero.
                        </td>
                    </tr>
                ) : (
                    resultData.map((yearData) => {
                        const totalInterest =
                            yearData.valueEndOfYear -
                            yearData.annualInvestment * yearData.year -
                            initialInvestment;

                        const totalAmountInvested =
                            yearData.valueEndOfYear - totalInterest;

                        return (
                            <tr key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>
                                    {formatter.format(yearData.valueEndOfYear)}
                                </td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        );
                    })
                )}
            </tbody>
        </table>
    );
};
