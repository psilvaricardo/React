import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import CustomHeader from './components/Header/CustomHeader';
import TabButton from './components/TabButton';

function App() {

  function clickHandler() {
    console.log('click handler!!');
  }


  return (
    <div>
      <CustomHeader />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={clickHandler}>Components</TabButton>
            <TabButton onSelect={clickHandler}>JSX</TabButton>
            <TabButton onSelect={clickHandler}>Props</TabButton>
            <TabButton onSelect={clickHandler}>State</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
