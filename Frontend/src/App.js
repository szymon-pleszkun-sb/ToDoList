import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import UpdateTask from "./components/UpdateTask";
import TaskCalendar from "./components/TaskCalendar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                    <Routes>
                        <Route index element={<TaskList />} />
                        <Route path="/" element={<TaskList />}/>
                        <Route path="/taskList" element={<TaskList />} />
                        <Route path="/addTask" element={<AddTask />} />
                        <Route path="/editTask/:id" element={<UpdateTask />} />
                        <Route path="/calendar" element={<TaskCalendar />} />
                    </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;