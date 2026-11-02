import { CORE_CONCEPTS } from "../data.js";
import { CoreConcept } from "./CoreConcept.jsx";

export const CoreConcepts = () => {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {/* If you have a use case like this where your props names in your
                Component -- in this case CoreConcept -- are the same to the property 
                names of the object that contains the data you want to set, you can 
                use the spread operator to pull out the (key, value) pairs */}
                {CORE_CONCEPTS.map((concept) => (
                    <CoreConcept key={concept.title} {...concept} />
                ))}
            </ul>
        </section>
    );
};
