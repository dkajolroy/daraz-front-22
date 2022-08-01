import axios from 'axios';
import { API_URI } from './../../config';

export const register = (userData) => async () => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        await axios.post(`${API_URI}/register`, userData, config)
    } catch (error) {
        console.log(error)
    }
}

export const login = (userData) => async (dispatch, allInfo) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.post(`${API_URI}/login`, userData, config)
        sessionStorage.setItem('d_U_50EcEx', JSON.stringify(data));
    } catch (error) {
        console.log(error)
    }
}