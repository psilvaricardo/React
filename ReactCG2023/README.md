# Various projects related to React, ReactJS and React Native

Here are some projects related to ReactJS, some of them are from the Udemy's 2023 versions.

* `hello-world`: This is just a simple project that was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is using a pre-configured webpack build for development. This project is part of sections 3 and is being used to understand the React Basics and working with Components and the initial POC for Composition.
* `01-time-to-practice`: This is just a demo application that was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is using a pre-configured webpack build for development. This project is part of sections 4 and this is just a simple practice to apply all the knowledge learned from section 3, using, building and using components. The instructor provided an initial application and the goal is: 
  - To split existing components into smaller components.
  - Create and use multiple custom components.
  - Pass data via props.


# JS Array Functions

* Next-Gen JavaScript *
- Read more about let: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- Read more about const: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

* ES6 Arrow Functions *
- Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce()  etc. You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).

The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required: [JS Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Particularly important in this course are:
- map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
- filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
- concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
- slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
- splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

## Useful Resources & Links

- create-react-app: https://github.com/facebookincubator/create-react-app
- Introducing JSX: https://reactjs.org/docs/introducing-jsx.html
- Rendering Elements: https://reactjs.org/docs/rendering-elements.html
- Components & Props: https://reactjs.org/docs/components-and-props.html
- Listenable Events: https://reactjs.org/docs/events.html
- Conditional Rendering: https://reactjs.org/docs/conditional-rendering.html
- Lists & Keys: https://reactjs.org/docs/lists-and-keys.html
- Using CSS Modules in create-react-app Projects: https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2
- More information about CSS Modules: https://github.com/css-modules/css-modules
- Error Boundaries: https://reactjs.org/docs/error-boundaries.html
- Chrome Devtool Debugging: https://developers.google.com/web/tools/chrome-devtools/javascript/
- Reference vs Primitive types: https://academind.com/tutorials/reference-vs-primitive-values/
- More on useEffect(): https://reactjs.org/docs/hooks-effect.html
- State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html
- PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html
- Higher Order Components: https://reactjs.org/docs/higher-order-components.html
- Refs: https://reactjs.org/docs/refs-and-the-dom.html
- Enabling CSS Modules: https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet

## Reaching out to the Web from React (Http/Ajax)

- Axios Docs: https://github.com/axios/axios
- JSON Placeholder: https://jsonplaceholder.typicode.com/ is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow,...or simply to test things locally.

## Backend Service

- Firebase: https://firebase.google.com This is a free service offered by google, it is an out-to-the-box working backend which includes a data base.

## Java Script Refresher

In case it's some time since you last worked with JavaScript, we will revisit some core concepts. This is valid by the time of writing it (Sep/2023).

There are some different ways to create a function, you can have no params, or add as many parameters as you need. 

```js
// function declared in traditional way, using the function reserved word:
function greetUser ( userName, message ) {
   // function code here.
}

// here the function declared using the arrow syntaxis (arrow function syntaxis):
const greetUser = (userName, message) => {
  // function code here.
};

// If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses. Instead of
(userName) => { ... }
// you could write
userName => { ... }
// If your function takes no parameters, parentheses must not be omitted 
() => { ... }
// if your function takes more than one parameter, you also must not omit parentheses 
(userName, userAge) => { ... }
// If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.
number => number * 3;
// If you go for the shorter alternative and you're trying to return a JavaScript object only, here we are wrapping the object in extra parentheses, because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object). 
number => ({ age: number }); 
```

Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and convenient way. It provides a syntax for breaking down complex data structures into simpler parts. There are two main forms of destructuring in JavaScript:

1. Array Destructuring: You can destructure arrays by using square brackets []. Here's a basic example:
```js
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers; // Destructuring assignment

console.log(first);  // Output: 1
console.log(second); // Output: 2
```

2. Object Destructuring: You can destructure objects by using curly braces {}. Here's an example:
```js
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person; // Destructuring assignment

console.log(firstName); // Output: 'John'
console.log(lastName);  // Output: 'Doe'
```

3. Destructuring in Function Parameter Lists with Objects:
```js
function printPerson({ firstName, lastName }) {
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
}

const person = { firstName: 'John', lastName: 'Doe' };
printPerson(person);
```

4. Destructuring in Function Parameter Lists with Arrays:
```js
function logNumbers([first, second]) {
  console.log(`First Number: ${first}`);
  console.log(`Second Number: ${second}`);
}

const numbers = [10, 20];
logNumbers(numbers);
```

The spread operator (...) is a JavaScript feature that allows you to spread elements from one data structure (such as an array or an object) into another. It provides a concise and flexible way to work with arrays, objects, and function arguments. It is is commonly used for tasks like merging arrays, creating copies of objects, and simplifying function parameter handling. It's available in modern JavaScript and is widely supported in various environments, making it a valuable part of JavaScript development. Here's how the spread operator works:

1. Spread Operator with Arrays --> In this example, the spread operator is used to create a new array moreNumbers that contains all the elements from the numbers array, followed by additional elements 4, 5, and 6. It essentially spreads out the elements of numbers into the new array.
```js
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers); // Output: [1, 2, 3, 4, 5, 6]
```

2. Spread Operator with Objects --> In this case, the spread operator is used to create a new object updatedPerson that includes all the properties from the person object and adds a new property age. It spreads out the properties of person into the new object.
```js
const person = { firstName: 'John', lastName: 'Doe' };
const updatedPerson = { ...person, age: 30 };
console.log(updatedPerson); // Output: { firstName: 'John', lastName: 'Doe', age: 30 }
```

3. Spread Operator with Function Arguments --> In functions, you can use the spread operator to pass elements of an array as separate arguments to the function. In this example, the ...numbers spread operator passes the values 1, 2, and 3 as individual arguments to the sum function.
```js
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); // Output: 6
```