import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';
import { MOMENT_SAVED } from './types'

const header = { headers: { authorization: localStorage.getItem('token') } };
const email = localStorage.getItem('email');

export default function createMoment({ date, moment }) {
	const request = axios.post(
    `${ROOT_URL}/moment`,
		{ date, moment, email },
    header
  )
	.then(() => { return { type: MOMENT_SAVED }});

	return { type: MOMENT_SAVED };
}