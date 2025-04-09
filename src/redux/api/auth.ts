import axios from "axios";

const REGISTER_API = 'http://localhost:8000/api';

export const registerRequest = (user: Record<string, string>) => axios.post(`${REGISTER_API}/register`, user);

export const loginRequest = (user: Record<string, string>) => axios.post(`${REGISTER_API}/login`, user);