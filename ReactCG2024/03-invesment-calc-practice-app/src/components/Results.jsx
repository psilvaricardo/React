import calculateInvestmentResults from '../util/investment.js';

const Results = ({ input }) => {
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);

    return (
        <>
            <p>Results...</p>
        </>
    );
};

export default Results;
