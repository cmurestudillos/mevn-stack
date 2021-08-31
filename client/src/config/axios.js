import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : process.env.VUE_APP_BACKEND_URL
});

export default clienteAxios;