import axios from 'axios';

import {
    BASE_URI,
    SERVER_URL,
} from './constants';

let axiosPokeApi = axios.create({
    headers: {
        common: {}
    }
});

axiosPokeApi.defaults.baseURL = `${SERVER_URL}${BASE_URI}`;

axiosPokeApi.interceptors.response.use(response => {
    return response;
}, error => {
    if (!error || !error.response || error.response.status === 401 || error.response.status === 403) {
        /** TODO: Incluir Redirect */
    }
    throw error;
});

export default axiosPokeApi;
