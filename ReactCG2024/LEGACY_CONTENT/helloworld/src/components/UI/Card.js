import './Card.css';

const Card = (props) => {
    // anything we receive as a css class from the outside is added here.
    const classes = 'card ' + props.className;

    // Composition: This will have the common logic to style the 'so-called container' rounded corners, 
    //              this is all about reusing code, avoind code duplication and keeping your other components clean.

    // This is some kind of wrapper around components that encapsulates common functionality and CSS
    // children is a reserved word and always is going to be whatever you put between the opening and closing tags of your custom component
    return (<div className={classes}> {props.children} </div>);
}

export default Card;
