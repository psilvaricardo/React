// export const TabButton = (props) => {
// we can use object destructuring...
// pulling out the children property
// so we can use it just like this.
export const TabButton = ({ children, onClickFn }) => {
    // when you add the definition of your handler inside
    // the functional component, you have the advantage that
    // your handler will have access to the component's
    // props and state...

    // React automatically injects the event ('e') here.
    // Another option is to use an in-line arrow function
    // if you need to pass additional custom arguments
    // <button onClick={(e) => handleDelete(itemId, e)}>
    //const onClickHandler = (e) => {
    //    console.log("onClickHandler: ", e.target);
    //};

    return (
        <li>
            {/* Using the special build-in 'children' property.
             This is set by React, and it refers to whichever content
             between your component's tags, it can be anything simple
             or complex */}
            <button onClick={onClickFn}>{children}</button>
        </li>
    );
};
