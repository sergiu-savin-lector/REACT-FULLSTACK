import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:4001/';

async function login(payload) {
    const response = await axios.post('/login', payload);

    console.dir(response.data)
    return response;
}

async function register(payload) {
    return axios.post('/register', payload);
}

async function logout() {
    localStorage.removeItem('token');
}

const authService = {
    login,
    logout,
    register
}

export default authService;