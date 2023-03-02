import { Link } from "react-router-dom";


const Navbar = () => {
    const refresh = () => window.location.reload(true)

    return (
        <nav className="bg-gray-800 opacity-80 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="justify-between items-center">
                    <Link
                        to="/"
                        className="text-lg font-semibold text-gray-100">
                        To Do List
                    </Link >

                </div>
                <div className="flex items-center">
                    <Link
                        to="/addTask"
                        className="flex rounded bg-slate-600 text-white px-6 py-2 font-semibold mr-4 hover:bg-slate-700"
                    >
                        Add Task
                    </Link>
                    <Link
                        to="/calendar"
                        className="flex rounded bg-slate-600 text-white px-6 py-2 font-semibold hover:bg-slate-700"
                    >
                        Calendar View
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;