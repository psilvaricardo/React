import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';

const Examples = () => {
    const [ selectedTopic, setSelectedTopic ] = useState();

    let tabContent = 'Please select a topic.';
  
    function clickHandler(selectedBtn) {
      // selectedBtn => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedBtn);
    }

    return (
        <Section title='Examples' id='examples'>
        <menu>
          {Object.entries(EXAMPLES).map(([key, example]) => (
            <TabButton 
              key={key}
              isSelected={ selectedTopic === key } 
              onClick={() => clickHandler( key ) }
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
      </Section>
    );
}

export default Examples;