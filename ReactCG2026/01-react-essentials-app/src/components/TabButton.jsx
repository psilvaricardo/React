// export const TabButton = (props) => {
// we can use object destructuring...
// pulling out the children property
// so we can use it just like this.
export const TabButton = ({ children }) => {
    return (
        <li>
            {/* Using the special build-in 'children' property.
             This is set by React, and it refers to whichever content
             between your component's tags, it can be anything simple
             or complex */}
            <button>{children}</button>
        </li>
    );
};
