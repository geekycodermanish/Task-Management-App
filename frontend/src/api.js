import axios from 'axios';

// Base URL of your backend API (ensure the '/api' prefix is correct for your setup)
const API_URL = 'http://localhost:8000/tasks';

// Fetch all tasks
export const fetchTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data.data);
        return response.data.data; // Return the tasks data
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

// Fetch a single task by ID
export const fetchTaskById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data.data; // Return the task data
    } catch (error) {
        console.error('Error fetching task by ID:', error);
        throw error;
    }
};

// Create a new task
export const createTask = async (task) => {
    try {
        const response = await axios.post(API_URL, task);
        return response.data; // Return the created task data
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

// Update an existing task by ID
export const updateTask = async (id, task) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, task);
        return response.data; // Return the updated task data
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};

// Delete a task by ID
export const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; // Return confirmation of deletion
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};
