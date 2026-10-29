// const CoreConcept = (props) => {
// we can also use object destructuring by adding {} to
// destructure the first parameter of this function,
// the props parameter in this case.
export const CoreConcept = ({ title, description, image }) => {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
};
