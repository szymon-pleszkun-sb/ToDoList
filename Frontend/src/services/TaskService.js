import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/tasks";

class TaskService {
    createTask(task) {
        return axios.post(BASE_URL, task);
    }

    getAllTasks() {
        return axios.get(BASE_URL);
    }

    deleteTask(id) {
        return axios.delete(BASE_URL + "/" + id);
    }

    getTaskById(id) {
        return axios.get(BASE_URL + "/" + id);
    }

    updateTask(task, id) {
        return axios.put(BASE_URL + "/" + id, task);
    }
}

export default new TaskService();