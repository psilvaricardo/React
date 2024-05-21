import './CustomHeader.css';
import dynamicImg from "../../assets/investment-calculator-logo.png";

const CustomHeader = () => {
    return (
        <header id='header'>
            <img src={dynamicImg} alt="Investment Calculator" />
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default CustomHeader;
