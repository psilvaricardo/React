import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';

const Examples = () => {
    const [ selectedTopic, setSelectedTopic ] = useState();

    let tabContent = 'Please select a topic.';
  
    function clickHandler(selectedBtn) {
      // selectedBtn => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedBtn);
      // console.log('selectedBtn => ' + selectedBtn);
    }

    return (
        <section id='examples'>
        <h2>Examples</h2>
        <menu>
          {Object.entries(EXAMPLES).map(([key, example]) => (
            <TabButton 
              key={key}
              isSelected={ selectedTopic === key } 
              onSelect={() => clickHandler( key ) }
            >
              {example.title}
            </TabButton>
          ))}
        </menu>

        { !selectedTopic ? 
          (<p>{tabContent}</p>) : 
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
    );
}

export default Examples;