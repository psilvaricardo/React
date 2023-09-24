import './Card.css';

function Card(props) {
    // anything we receive as a class from the outside is added here.
    const classes = 'card ' + props.className;

    // this will have the common logic to style the 'container' rounded corners
    // this is some kind of wrapper around components that encapsulates common functionality and CSS
    // children is a reserved word and always is going to be whatever between the opening and closing tags of your custom component
    return (<div className={classes}> {props.children} </div>);
}

export default Card;
