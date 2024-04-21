import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import CoreConcept from './components/CoreConcept';
import CustomHeader from './components/Header/CustomHeader';
import TabButton from './components/TabButton';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  let tabContent = 'Please click a button';

  function clickHandler(selectedBtn) {
    // selectedBtn => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedBtn);
    // console.log('selectedBtn => ' + selectedBtn);
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
            <TabButton onSelect={() => clickHandler('components')}>Components</TabButton>
            <TabButton onSelect={() => clickHandler('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => clickHandler('props')}>Props</TabButton>
            <TabButton onSelect={() => clickHandler('state')}>State</TabButton>
          </menu>
          { !selectedTopic ? 
            (<p>Please select a topic.</p>) : 
            (
              <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                  {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>
            ) 
          }
        </section>
      </main>
    </div>
  );
}

export default App;
