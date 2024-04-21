import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import CustomHeader from './components/Header/CustomHeader';
import TabButton from './components/TabButton';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

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
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
