import React from 'react';
import Modal from 'react-modal';
import {useNavigate} from "react-router-dom";


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


const TaskModal = ({ isOpen, closeModal, task }) => {

    const navigate = useNavigate(null);


    return (
        <div className=" mx-8 my-8">
            <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="modal mx-5 my-5 max-w-sm whitespace-normal flex-auto border-b"
            overlayClassName="overlay"
            ariaHideApp={false}
            dayMaxEvents={true}
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{task.name}</h2>
                <button onClick={closeModal} className="text-2xl font-bold ">&times;</button>
            </div>
            <div className="mb-4">
                <p className="text-gray-700 font-bold ">Description:</p>
                <p className="text-gray-700 ">{task.description}</p>
            </div>
            <div className="mb-4 max-w-min">
                <p className="text-gray-700 font-bold">Priority:</p>
                <p className={`rounded-full px-3 py-1 text-center text-sm font-semibold ${getPriorityColor(task.priority)} opacity-70 text-white`}>
                    {task.priority}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-gray-700 font-bold">Progress:</p>
                <p className="text-gray-700">{task.progress}</p>
            </div>
            <div className="mb-4">
                <p className="text-gray-700 font-bold">Date added:</p>
                <p className="text-gray-700">{task.dateAdded}</p>
            </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        onClick={() => navigate(`/editTask/${task.id}`)}
                        className="rounded text-white font-semi-bold bg-green-400 hover:bg-green-700 py-2 px-6"
                    >
                        Edit task
                    </button>
                </div>
        </Modal>
    </div>

    );
};

export default TaskModal;
