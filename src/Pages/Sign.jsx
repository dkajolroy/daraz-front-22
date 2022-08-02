import React from 'react'
import Login from './../Components/Auth/Login';
import Register from './../Components/Auth/Register';

export default function Sign() {
    return (
        <div className="auth_user_container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Register />
                    </div>
                    <div className="col">
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}
