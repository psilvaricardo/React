import reactCoreConceptsLogo from './assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
    const description = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            <img src={reactCoreConceptsLogo} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you
                are going to build!
            </p>
        </header>
    );
};

export const App = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
};
