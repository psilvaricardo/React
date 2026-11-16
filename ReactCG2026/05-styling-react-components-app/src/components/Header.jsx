import logo from "../assets/logo.png";
// import classes from "./Header.module.css";
import { styled } from "styled-components";

const HeaderCSSComponent = styled.header`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;

        & img {
            object-fit: contain;
            margin-bottom: 2rem;
            width: 11rem;
            height: 11rem;
        }

        & h1 {
            font-size: 1.5rem;
            font-weight: 600;
            letter-spacing: 0.4em;
            text-align: center;
            text-transform: uppercase;
            color: #9a3412;
            font-family: "Pacifico", cursive;
            margin: 0;
        }

        & p {
            text-align: center;
            color: #a39191;
            margin: 0;
        }

        @media (min-width: 768px) {
            margin-bottom: 4rem;
            
            & h1 {
                font-size: 2.25rem;
            }
    `;

export const Header = () => {
    /** 
     * Advantages & Disadvantages of Using Inline CSS in ReactJS

    Inline CSS refers to defining CSS styles directly on JSX
    elements using the style attribute. In React, inline styles
    are specified as JavaScript objects rather than CSS strings.

    Example:

    <p style={{ color: "red" }}>
        A community of artists and art-lovers.
    </p>


    ADVANTAGES                          DISADVANTAGES
    ----------------------------------------------------------------
    1. Component-Level Styling          1. Limited Reusability
    Styles are applied directly to      Styles defined directly on JSX
    a specific element without          elements cannot easily be shared
    affecting other elements in        across multiple components
    the application.                    without extracting them into
                                        reusable JavaScript objects.

    2. No Naming Conflicts              2. Reduced Readability
    Does not require CSS class          Defining multiple CSS properties
    names, eliminating conflicts        directly inside JSX can make
    between similarly named CSS        components harder to read and
    classes.                            maintain.

    3. Dynamic Styling                  3. No Pseudo-Classes
    Styles can easily be determined     Inline styles do not directly
    using component props, state,       support CSS pseudo-classes such
    variables, or JavaScript            as :hover, :focus, or :active.
    expressions.

    4. No External CSS Files            4. No Media Queries
    Simple styling can be defined       Inline styles do not directly
    directly within the component,      support media queries, making
    eliminating the need for            responsive design more difficult
    additional CSS files.               without additional JavaScript
                                        logic or external CSS.

    5. High Specificity                 5. Difficult Style Overrides
    Inline styles take precedence       Because inline styles have high
    over most normal stylesheet        specificity, overriding them
    rules, making it easier to          using external CSS can be more
    apply element-specific styles.      difficult.

    6. Conditional Styling              6. Lack of Separation of Concerns
    Styles can be changed directly      Mixing styling with component
    using conditional expressions       structure and logic can make
    without defining multiple CSS       the code less organized,
    classes.                            especially in larger applications.

    7. No Additional Dependencies       7. Limited CSS Features
    Inline styling is supported         Inline styles do not directly
    natively by React and does not      support pseudo-elements such as
    require additional styling          ::before and ::after, CSS
    libraries or frameworks.            selectors, or @keyframes.

    8. Easy Access to JavaScript        8. Potential Code Duplication
    CSS property values can be          Repeating the same inline styles
    calculated using JavaScript         across multiple JSX elements can
    variables, functions, and           increase code duplication and
    expressions.                        maintenance effort.


    CONCLUSION

    Inline CSS is a convenient approach to styling individual
    elements in React applications, particularly when styles
    depend on component props, state, or dynamic calculations.

    However, inline CSS has limitations when it comes to
    reusability, responsive design, pseudo-classes, and separation
    of concerns.

    For larger applications, it is generally preferable to use
    external CSS files, CSS Modules, or other styling solutions
    for most of the application's styling, while reserving inline
    CSS for simple, element-specific, or dynamic styles.


    IMPORTANT:

    React inline styles use JavaScript objects rather than
    traditional CSS strings.

    CSS property names must generally use camelCase instead of
    kebab-case.

    Traditional CSS:

    background-color: red;
    font-size: 16px;
    text-align: center;

    React inline CSS:

    <p
        style={{
            backgroundColor: "red",
            fontSize: "16px",
            textAlign: "center",
        }}
    >
        Example text
    </p>


    DYNAMIC STYLING EXAMPLE:

    One of the main advantages of inline CSS is the ability to
    change styles dynamically based on component state or props.

    <p style={{ color: isValid ? "green" : "red" }}>
        Validation message
    </p>

    In this example, the text color changes automatically based
    on the value of the isValid variable.


    REUSABLE INLINE STYLE OBJECT:

    Inline styles can also be extracted into JavaScript objects
    to improve readability and reusability.

    const paragraphStyle = {
        color: "red",
        fontSize: "16px",
        textAlign: "center",
    };

    <p style={paragraphStyle}>
        A community of artists and art-lovers.
    </p>


    UNDERSTANDING THE DOUBLE CURLY BRACES:

    style={{ color: "red" }}

    The outer curly braces indicate that a JavaScript expression
    is being used inside JSX.

    The inner curly braces define the JavaScript object containing
    the CSS properties and their corresponding values.

    When using a previously defined JavaScript object, only one
    pair of curly braces is required:

    style={paragraphStyle} 
    */

    return (
        <HeaderCSSComponent>
            <img src={logo} alt="A canvas" />
            <h1>ReactArt</h1>
            <p //className={classes.paragraph}
            >
                A community of artists and art-lovers.
            </p>
        </HeaderCSSComponent>
    );
};
