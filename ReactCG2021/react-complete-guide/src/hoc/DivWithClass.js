import React from 'react';

// This High Order Component (HOC) is a wrapper
// it setup a CSS class on a div that wraps components. 
const divWithClass = props => (
    <div className={props.cssClassName}>
        {props.children}
    </div>
);

export default divWithClass;
