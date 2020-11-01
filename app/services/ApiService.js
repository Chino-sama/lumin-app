import { apiAxios } from 'lumin-app/app/utils/Axios';

function apiLogin (credentials) {
	const url = '/login';
	const method = 'POST';

	return makeRequest({ url, method, data: credentials });
}

function getSensorData (headers) {
	const url = '/data';
	const method = 'GET';

	return makeRequest({ url, method, headers });
}

async function makeRequest(requestData = {}) {
	let res = await apiAxios(requestData);
	return res.data;
}

export { apiLogin, getSensorData };
