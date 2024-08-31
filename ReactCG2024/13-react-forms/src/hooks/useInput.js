// Information Reference
// https://react.dev/reference/rules/rules-of-hooks
// https://www.npmjs.com/package/eslint-plugin-react-hooks

import { useState } from "react";

export const useInput = (defaultValue, validationFn) => {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    const handleInputChange = (e) => {
        setEnteredValue(e.target.value);
        setDidEdit(false);
    };

    const handleInputBlur = (e) => {
        setDidEdit(true);
        console.log("useInput.handleInputBlur: " + e.target.value);
    };

    return {
        value: enteredValue,
        hasError: didEdit && valueIsValid,
        handleInputChange,
        handleInputBlur,
    };
};
