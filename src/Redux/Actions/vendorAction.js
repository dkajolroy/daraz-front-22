import axios from 'axios';
import { API_URI } from './../../config';
import toast from 'react-hot-toast';

export const vendorLoginAction = (info) => async (dispatch) => {
    try {
        dispatch({ type: "VENDOR_LOGIN_REQUEST" })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.post(`${API_URI}/login_store`, info, config);
        localStorage.setItem('d_V_50EcEx', JSON.stringify(data));
        dispatch({ type: "VENDOR_LOGIN_SUCCESS", payload: data });
        toast.success("Login success !", {
            duration: 3000,
            position: 'top-center',
            iconTheme: {
                primary: 'green',
                secondary: '#fff',
            },
            ariaProps: {
                role: 'status',
                'aria-live': 'polite',
            },
        });
    } catch (error) {
        toast.error(error.response && error.message ? error.response.data.message : error.message, {
            duration: 3000,
            position: 'top-center',
            iconTheme: {
                primary: '#ff0000',
                secondary: '#fff',
            },
            ariaProps: {
                role: 'status',
                'aria-live': 'polite',
            },
        });
        dispatch({
            type: "VENDOR_LOGIN_ERROR",
            payload: error.response && error.message ? error.response.data.message : error.message
        });
    }
}

// LogOut Vendor
export const logOutAction = () => (dispatch) => {
    localStorage.removeItem("d_V_50EcEx")
    dispatch({ type: "VENDOR_LOGIN_SUCCESS", payload: 0 });
    toast.success("Logout success !", {
        duration: 3000,
        position: 'top-center',
        iconTheme: {
            primary: 'green',
            secondary: '#fff',
        },
        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },
    });
}