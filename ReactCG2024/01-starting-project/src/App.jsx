import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import CustomHeader from './components/CustomHeader';

function App() {
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
      </main>
    </div>
  );
}

export default App;
