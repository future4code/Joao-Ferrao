import axios from 'axios';

const api = axios.create({
    baseURL: `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-ferrao-johnson`,
    timeout: 50000
})







const getTrips = () => api.get(`/trips`)

const createTrips = () => api.post(`/trips`)

const postLogin = (email, password) => api.post(`/login`, { email, password })



export {
    getTrips,
    postLogin,
    createTrips,
}