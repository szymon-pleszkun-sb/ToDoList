import React from "react";
import { useNavigate } from "react-router-dom";


const Task = ({ task, deleteTask }) => {
    const navigate = useNavigate();


    const getPriorityColor = (priority) => {
        switch (priority) {
            case "High":
                return "bg-red-600";
            case "Medium":
                return "bg-yellow-600";
            case "Low":
                return "bg-green-600";
            default:
                return "bg-gray-600";
        }
    };


    return (
        <tr>
            <td className="py-4 px-6 border-b border-gray-200">{task.name}</td>
            <td className="py-4 px-6 border-b border-gray-200 truncate">{task.description}
            </td>
            <td className="py-4 px-6 border-b border-gray-200">
                <p
                    className={`rounded-full px-3 py-1 text-sm max-w-min text-center font-semibold ${getPriorityColor(task.priority)} opacity-60 text-white`}
                >
                    {task.priority}
                </p>
            </td>
            <td className="py-4 px-6 border-b border-gray-200">{task.progress}</td>
            <td className="py-4 px-6 border-b border-gray-200">{task.dateAdded}</td>
            <td className="py-4 px-6 border-b border-gray-200 text-right">
                <button
                    onClick={(e) => deleteTask(e, task.id)}
                    className="rounded bg-red-600 opacity-70 text-white px-1 py-1 font- mr-2 hover:bg-red-700"
                >
                    Delete
                </button>
                <button
                    onClick={() => navigate(`/editTask/${task.id}`)}
                    className="rounded bg-gray-600 opacity-70 text-white px-1 py-1 hover:bg-gray-700"
                >
                    Edit
                </button>
            </td>
        </tr>
    );
};

export default Task;