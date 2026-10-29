import { Header } from "./components/Header.jsx";
import { CoreConcept } from "./components/CoreConcept.jsx";

import { CORE_CONCEPTS } from "./data.js";

export const App = () => {
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
            </main>
        </div>
    );
};
