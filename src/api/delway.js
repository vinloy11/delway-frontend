import axios from 'axios'

const delWayRequest = axios.create({
    baseURL: 'http://localhost:8080/'
});

export default delWayRequest