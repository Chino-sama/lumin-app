import axios from 'axios';

const apiAxios = axios.create({
	baseURL: 'https://hikari-api.herokuapp.com'
});

apiAxios.defaults.headers.common['Content-Type'] = 'application/json';


export { apiAxios };