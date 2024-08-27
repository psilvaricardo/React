export const isEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};

export const isNotEmpty = (value) => {
    return value.trim() !== "";
};

export const hasMinLength = (value, minLength) => {
    return value.length >= minLength;
};

export const isEqualsToOtherValue = (value, otherValue) => {
    return value === otherValue;
};
