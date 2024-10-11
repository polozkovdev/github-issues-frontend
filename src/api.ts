import axios from 'axios';

const API_URL = 'http://localhost:4000/api';  // Адрес вашего бэкенда

// Функция для получения списка issues
export const fetchIssues = async (user: string, repo: string) => {
    const response = await axios.get(`${API_URL}/issues/${user}/${repo}`);
    return response.data;
};

// Функция для получения конкретного issue
export const fetchIssue = async (user: string, repo: string, issueId: number) => {
    const response = await axios.get(`${API_URL}/issues/${user}/${repo}/${issueId}`);
    return response.data;
};
