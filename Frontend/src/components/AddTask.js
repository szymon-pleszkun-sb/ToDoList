import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskService from "../services/TaskService";

const AddTask = () => {
    const [task, setTask] = useState({
        id: "",
        name: "",
        description: "",
        priority: "",
        progress: "",
        dateAdded: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setTask({ ...task, [e.target.name]: value });
    };

    const createTask = (e) => {
        e.preventDefault();
        TaskService.createTask(task)
            .then((response) => {
                console.log(response);
                navigate("/taskList");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setTask({
            id: "",
            name: "",
            description: "",
            priority: "",
            progress: "",
            dateAdded: "",
        });
    };

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Create new Task</h1>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={task.name}
                        onChange={(e) => handleChange(e)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        value={task.description}
                        onChange={(e) => handleChange(e)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required></input>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="priority"
                    >
                        Priority
                    </label>
                    <select
                        name="priority"
                        value={task.priority}
                        onChange={(e) => handleChange(e)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required>
                            <option value="">Select priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="progress"
                    >
                        Progress
                    </label>
                    <select
                        name="progress"
                        value={task.progress}
                        onChange={(e) => handleChange(e)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required>
                        <option value="">Select progress</option>
                        <option value="Not started">Not started</option>
                        <option value="In progress">In progress</option>
                        <option value="Done">Done</option>

                    </select>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="date-added"
                    >
                        Date Added
                    </label>
                    <input
                        type="date"
                        name="dateAdded"
                        value={task.dateAdded}
                        onChange={(e) => handleChange(e)}
                        required
                        className="mt-1 py-2 px-3 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                </div>


                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        onClick={createTask}
                        className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                        Save
                    </button>
                    <button
                        onClick={reset}
                        className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                        Clear
                    </button>
                    <button
                        onClick={() => navigate("/taskList")}
                        className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
export default AddTask;