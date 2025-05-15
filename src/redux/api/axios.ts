import axios from "axios";

const BYAL_API = 'http://localhost:8000/api';
// const BYAL_API = 'https://byal-api-28c22502030e.herokuapp.com/api';

const instance = axios.create({
  baseURL: BYAL_API,
  withCredentials: true,
});

export default instance;