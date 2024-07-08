import { useState } from "react";

const NewTask = ({ onAdd }) => {
    const [enteredTask, setEnteredTask] = useState("");

    const handleInputChange = (event) => {
        setEnteredTask(event.target.value);
    };

    const handleButtonClick = () => {
        if (enteredTask.trim() === "") {
            return;
        }
        onAdd(enteredTask);
        setEnteredTask("");
    };

    return (
        <div className="flex items-center gap-4">
            <input
                value={enteredTask}
                onChange={(e) => handleInputChange(e)}
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            />
            <button
                onClick={() => handleButtonClick()}
                className="text-stone-700 hover:text-stone-950"
            >
                Add Task
            </button>
        </div>
    );
};

export default NewTask;
