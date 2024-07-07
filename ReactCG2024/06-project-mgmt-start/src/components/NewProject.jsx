import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd }) => {
    const modalWnd = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // keep it simple just for the POC...
        if (
            enteredTitle.trim() === "" ||
            enteredDescription.trim() === "" ||
            enteredDueDate.trim() === ""
        ) {
            // show a modal window error
            modalWnd.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    };

    return (
        <>
            <Modal ref={modalWnd} buttonCaption="Close">
                <h2>Invalid input</h2>
                <p>Looks like you forgot to enter a value.</p>
                <p>
                    Please make sure you provide a valid value for every input
                    field
                </p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950">
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleSave()}
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    );
};

export default NewProject;
