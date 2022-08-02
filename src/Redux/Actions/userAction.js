import axios from 'axios';
import { API_URI } from './../../config';

// Not Store data for Registration
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

// Store Data for LoginUser
export const login = (userData) => async (dispatch, info) => {
    try {
        dispatch({ type: "LOGIN_USER_REQUEST" })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.post(`${API_URI}/login`, userData, config)
        localStorage.setItem('d_U_50EcEx', JSON.stringify(data));
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: data })
    } catch (error) {
        dispatch({
            type: "LOGIN_USER_FAILED",
            payload: error.response && error.message ? error.response.data.message : error.message
        })
    }
}