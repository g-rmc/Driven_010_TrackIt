import axios from 'axios';

const baseURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postAccess (login) {
    const promise = axios.post(`${baseURL}/auth/login`, login);
    return promise;
}

function postRegister (register) {
    const promise = axios.post(`${baseURL}/auth/sign-up`, register);
    return promise;
}

function getHabits (config) {
    const promise = axios.get(`${baseURL}/habits`, config);
    return promise;
}

function postNewHabit (newHabit, config) {
    const promise = axios.post(`${baseURL}/habits`, newHabit, config);
    return promise;
}

function deleteHabit (habitId, config) {
    const promise = axios.delete(`${baseURL}/habits/${habitId}`, config);
    return promise;
}

function getToday (config) {
    const promise = axios.get(`${baseURL}/habits/today`, config);
    return promise;
}

function postCheck (habitId, config) {
    const promise = axios.post(`${baseURL}/habits/${habitId}/check`, true, config);
    return promise;
}

function postUncheck (habitId, config) {
    const promise = axios.post(`${baseURL}/habits/${habitId}/uncheck`, false, config);
    return promise;
}

function getHistory (config) {
    const promise = axios.get(`${baseURL}/habits/history/daily`, config);
    return promise;
}

export { postAccess, postRegister, getHabits, postNewHabit, deleteHabit, getToday, postCheck, postUncheck, getHistory }