import React from 'react';

// This High Order Component (HOC) is a wrapper
// it setup a CSS class on a div that wraps components. 
// this way, your HOC may handle errors, or dealing with your JSX code.
// const divWithClass = props => (
//     <div className={props.cssClassName}>
//         {props.children}
//     </div>
// );

// Another form of HOC,
// this way, your HOC does not so much involved with your JSX code.
const divWithClass = (WrappedComponent, cssClassName) => {
    return props => (
        <div className={cssClassName}>
            <WrappedComponent />
        </div>
    );
};

export default divWithClass;
