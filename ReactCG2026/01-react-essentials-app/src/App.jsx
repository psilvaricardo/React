import { Header } from "./components/Header/Header.jsx";
import { CoreConcept } from "./components/CoreConcept.jsx";
import { TabButton } from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

// Adding a react Hooks:
// 1. must be called ONLY inside component functions
// 2. it must NOT be called in nested code statements,
// must be called on the top level
import { useState } from "react";

export const App = () => {
    const [selectedTab, setSelectedTab] = useState();

    const onClickHandler = (e, id) => {
        console.log("onClickHandler: ", id);
        // setting the content dynamically using useState react hooks
        setSelectedTab(id);
    };

    let tabContent = <p>Plese select a tab to see more information</p>;

    if (selectedTab) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p>{EXAMPLES[selectedTab].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTab].code}</code>
                </pre>
            </div>
        );
    }

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
                        <TabButton
                            isTabSelected={selectedTab === "components"}
                            onClickFn={(e) => onClickHandler(e, "components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isTabSelected={selectedTab === "jsx"}
                            onClickFn={(e) => onClickHandler(e, "jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isTabSelected={selectedTab === "props"}
                            onClickFn={(e) => onClickHandler(e, "props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isTabSelected={selectedTab === "state"}
                            onClickFn={(e) => onClickHandler(e, "state")}
                        >
                            State
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
};
