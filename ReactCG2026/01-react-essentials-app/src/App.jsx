import reactCoreConceptsImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

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

const CoreConcept = (props) => {
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
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
                        <CoreConcept
                            title="Components"
                            description="The Core UI building block"
                            image={componentsImg}
                        />
                        <CoreConcept
                            title="Props"
                            description=""
                            image={componentsImg}
                        />
                        <CoreConcept
                            title=""
                            description=""
                            image={componentsImg}
                        />
                        <CoreConcept
                            title=""
                            description=""
                            image={componentsImg}
                        />
                    </ul>
                </section>
            </main>
        </div>
    );
};
