import http from "./http-common";

export const getAllList = async () => {
    const response = await http.get('/api/todoList');
    return response.data;
};

export const createTask = async (task) => {
    const response = await http.post('/api/todoList', task);
    return response.data;
};

export const deleteTask = async (id) => {
    const response = await http.delete(`/api/todoList/${id}`);
    return response.data;
};

export const updateTaskStatus = async (id, task, status) => {
    console.log("Updating task status. ID:", id, "Task:", task, "Status:", status);
    await http.put(`/api/todoList/${id}`, { task, status });
};