import React, { useEffect, useState } from "react";
import TaskService from "../services/TaskService";
import Task from "./Task";

const TaskList = () => {

    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState(null);
    const [sortPriority, setSortPriority] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await TaskService.getAllTasks();
                setTasks(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteTask = (e, id) => {
        e.preventDefault();
        TaskService.deleteTask(id).then((res) => {
            if (tasks) {
                setTasks((prevElement) => {
                    return prevElement.filter((task) => task.id !== id);
                });
            }
        });
    };

    function getPrioritySortValue(priority) {
        switch (priority) {
            case 'High':
                return 1;
            case 'Medium':
                return 2;
            case 'Low':
                return 3;
            default:
                return 0;
        }
    }

    let sortedTasks = tasks;

    if (sortPriority) {
        sortedTasks = tasks.sort((a, b) => {
            const aSortValue = getPrioritySortValue(a.priority);
            const bSortValue = getPrioritySortValue(b.priority);

            if (aSortValue === bSortValue) {
                return 0;
            } else if (sortOrder === 'asc') {
                return aSortValue < bSortValue ? -1 : 1;
            } else {
                return aSortValue > bSortValue ? -1 : 1;
            }
        });
    }




    return (
        <div className="container mx-auto my-8">
            <div className="flex-auto shadow border-b">
                <table className="flex-auto min-w-full">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Name
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Description
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6"
                            onClick={() => {
                                setSortPriority('priority');
                                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                            }}>
                            Priority
                            {sortPriority === 'priority' && sortOrder === 'asc' && <span>&#x25B2;</span>}
                            {sortPriority === 'priority' && sortOrder === 'desc' && <span>&#x25BC;</span>}
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Progress
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Date
                        </th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    {!loading && (
                        <tbody className="bg-white">
                        {sortedTasks.map((task) => (
                            <Task
                                task={task}
                                deleteTask={deleteTask}
                                key={task.id}
                                getPriorityColor={task.priority}
                            />
                        ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};
export default TaskList;