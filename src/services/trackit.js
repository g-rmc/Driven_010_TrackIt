import axios from 'axios';

const baseURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function getAccess (login) {
    const promise = axios.post(`${baseURL}/auth/login`, login);
    return promise;
}

function getRegister (register) {
    const promise = axios.post(`${baseURL}/auth/sign-up`, register);
    return promise;
}

export { getAccess, getRegister }