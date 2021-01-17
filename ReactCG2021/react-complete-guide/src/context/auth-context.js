import React from 'react';

// This is (not exactly) globally available JS object
// (it doesn't have to be an object, can be anything)
// as a context value that can be initialized with any 
// value you want and it also an anonymous function
const authContext = 
    React.createContext(
        {
            authenticated: false,
            login: () => {}
        }
    );

export default authContext;
