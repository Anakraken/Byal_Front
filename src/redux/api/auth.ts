import axiosInstance from './axios';

export const registerRequest = (user: Record<string, string>) => axiosInstance.post(`/register`, user);

export const loginRequest = (user: Record<string, string>) => axiosInstance.post(`/login`, user);

export const verifyTokenRequest = () => axiosInstance.get('/verify');

export const logoutRequest = () => axiosInstance.post('/logout');