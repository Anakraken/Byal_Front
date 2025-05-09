import axios from "axios";

const REGISTER_API = 'http://localhost:8000/api';
// const REGISTER_API = 'https://byal-api-28c22502030e.herokuapp.com/api';

const instance = axios.create({
  baseURL: REGISTER_API,
  withCredentials: true,
});

export default instance;