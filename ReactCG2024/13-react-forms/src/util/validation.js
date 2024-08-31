export const isEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};

export const isEmpty = (value) => {
    console.log(
        "isEmpty " + value + " " + (!value || value.trim().length === 0)
    );
    return !value || value.trim().length === 0;
};

export const hasMinLength = (value, minLength) => {
    return !(value.length >= minLength);
};

export const isEqualsToOtherValue = (value, otherValue) => {
    return value === otherValue;
};
