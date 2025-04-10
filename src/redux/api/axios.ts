import axios from "axios";

const REGISTER_API = 'http://localhost:8000/api';

const instance = axios.create({
  baseURL: REGISTER_API,
  withCredentials: true,
});

export default instance;