import { Tabs } from "./Tabs";
import { TabButton } from "./TabButton";
import { Section } from "./Section";
import { EXAMPLES } from "../data.js";
// Adding a react Hooks:
// 1. must be called ONLY inside component functions
// 2. it must NOT be called in nested code statements,
// must be called on the top level
import { useState } from "react";

export const Examples = () => {
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
        <Section id="examples" title="Examples">
            <Tabs
                buttonsContainer="menu"
                buttons={
                    <>
                        <TabButton
                            isTabSelected={selectedTab === "components"}
                            onClick={(e) => onClickHandler(e, "components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isTabSelected={selectedTab === "jsx"}
                            onClick={(e) => onClickHandler(e, "jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isTabSelected={selectedTab === "props"}
                            onClick={(e) => onClickHandler(e, "props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isTabSelected={selectedTab === "state"}
                            onClick={(e) => onClickHandler(e, "state")}
                        >
                            State
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
};
