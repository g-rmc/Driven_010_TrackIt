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

export { postAccess, postRegister, getHabits, postNewHabit }