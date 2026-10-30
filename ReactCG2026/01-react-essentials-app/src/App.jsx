import { Header } from "./components/Header/Header.jsx";
import { CoreConcept } from "./components/CoreConcept.jsx";
import { TabButton } from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

// Adding a react Hooks:
// 1. must be called ONLY inside component functions
// 2. it must NOT be called in nested code statements,
// must be called on the top level
import { useState } from "react";

export const App = () => {
    const [tabContent, setTabContent] = useState(
        "Please click a tab to see more information",
    );

    const onClickHandler = (e, idx) => {
        console.log("onClickHandler: ", idx);
        // setting the content dynamically using useState react hooks
        setTabContent(CORE_CONCEPTS[idx].description);
    };

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
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onClickFn={(e) => onClickHandler(e, 0)}>
                            Components
                        </TabButton>
                        <TabButton onClickFn={(e) => onClickHandler(e, 1)}>
                            JSX
                        </TabButton>
                        <TabButton onClickFn={(e) => onClickHandler(e, 2)}>
                            Props
                        </TabButton>
                        <TabButton onClickFn={(e) => onClickHandler(e, 3)}>
                            State
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
};
