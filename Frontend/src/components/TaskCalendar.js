import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import TaskService from '../services/TaskService';
import TaskModal from './TaskModal';


const TaskCalendar = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await TaskService.getAllTasks();
                setTasks(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTasks();
    }, []);

    const events = tasks.map((task) => ({
        title: task.name,
        start: new Date(task.dateAdded),
        extendedProps: {task},
    }));

    const handleEventClick = (eventInfo) => {
        setSelectedTask(eventInfo.event.extendedProps.task);
        setIsModalOpen(true);
        window.scrollTo(0, document.getElementById('modal').offsetTop);
    };

    const closeModal = () => {
        setSelectedTask(null);
        setIsModalOpen(false);
    };

    return (<div className=" mx-5 my-5">
        <div style={{ position: 'relative' }}>
            <FullCalendar
                plugins={[dayGridPlugin]}
                events={events}
                eventClick={handleEventClick}
                displayEventTime={false}
                dayMaxEvents={true}


            />
            {selectedTask && (
                <div id="modal">
                <TaskModal isOpen={isModalOpen} closeModal={closeModal} task={selectedTask} />
                </div>
            )}
        </div>
            </div>
    );
};

export default TaskCalendar;
