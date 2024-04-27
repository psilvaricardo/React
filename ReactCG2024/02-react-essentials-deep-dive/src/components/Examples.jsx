import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

const Examples = () => {
    const [ selectedTopic, setSelectedTopic ] = useState();

    let tabContent = 'Please select a topic.';

    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        );
    }
  
    const clickHandler = (selectedBtn) => {
      // selectedBtn => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedBtn);
    }

    const generateButtonsContent = () => {
        return Object.entries(EXAMPLES).map(([key, example]) => (
            <TabButton 
                key={key}
                isSelected={ selectedTopic === key } 
                onClick={() => clickHandler( key ) }
            >
                {example.title}
            </TabButton>
            ));
    };

    let buttonsContent = generateButtonsContent();

    return (
        <Section title='Examples' id='examples'>
            <Tabs buttons={buttonsContent}>
            {tabContent}
            </Tabs>
      </Section>
    );
}

export default Examples;
