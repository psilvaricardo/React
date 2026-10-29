import reactCoreConceptsImg from "./assets/react-core-concepts.png";

import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const genRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
    const description = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            <img src={reactCoreConceptsImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app
                you are going to build!
            </p>
        </header>
    );
};


// const CoreConcept = (props) => {
// we can also use object destructuring by adding {} to
// destructure the first parameter of this function, 
// the props parameter in this case.
const CoreConcept = ({title, description, image}) => {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
};

export const App = () => {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {/* If you have a use case like this where your props names in your
                        Component -- in this case CoreConcept -- are the same to the property 
                        names of the object that contains the data you want to set, you can 
                        use the spread operator to pull out the (key, value) pairs */}
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>
    );
};
