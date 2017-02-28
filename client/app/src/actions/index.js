import axios from 'axios';

export const FETCH_DATA_SETS = 'FETCH_DATA_SETS';
export const LOGIN = 'LOGIN';

const ROOT_URL = 'http://localhost:3000/api';

export function fetchDataSets(){
	const request = axios.get(`${ROOT_URL}/data`);

	return {
		type: FETCH_DATA_SETS,
		payload: request
	};
}

export function login(){
	const request = axios.get(`${ROOT_URL}/login`);

	return {
		type: LOGIN,
		payload: request
	};
}
