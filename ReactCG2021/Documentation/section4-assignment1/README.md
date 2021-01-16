# Assignment 2 - Time to practice Lists and Conditionals

Instructions:

- Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
- Create a new component (=> ValidationComponent) which receives the text length as a prop
- Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
- Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
- Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
- When you click a CharComponent, it should be removed from the entered text.
- Hint: Keep in mind that JavaScript strings are basically arrays!

### Useful Resources & Links

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
