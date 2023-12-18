import axios from 'axios';

const BASE_URL = "http://localhost:3000/api";

export const getAllZoos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/zoos`);

        if (response.status !== 200) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const jsonData = response.data;
        console.log('Response from server:', jsonData);
        return jsonData;
    } catch (error) {
        console.error('Error retrieving zoos:', error);
        // throw error;
    }
};

export const getSortedZoo = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/zoosort`);

        if (response.status !== 200) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const jsonData = response.data;
        return jsonData;
    } catch (error) {
        console.error('Error retrieving sorted zoos:', error);
        // throw error;
    }
};

export const postZoo = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/zoos`, data);

        if (response.status !== 200) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const jsonData = response.data;
        return jsonData;
    } catch (error) {
        console.error('Error posting zoo:', error);
        // throw error;
    }
};

export const editZoo = async (data) => {
    try {
        const response = await axios.put(`${BASE_URL}/zoos/${data.id}`, data);

        if (response.status !== 200) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const jsonData = response.data;
        console.log(jsonData);
        return jsonData;
    } catch (error) {
        console.error('Error editing zoo:', error);

        // throw error;
    }
};

export const deleteZoo = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/zoos/${id}`);

        if (response.status !== 200) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const jsonData = response.data;
        return jsonData;
    } catch (error) {
        console.error('Error deleting zoo:', error);
        // throw error;
    }
};
