import React from 'react'
import Login from './../Components/Auth/Login';
import Register from './../Components/Auth/Register';
import Layout from './../Components/Common/Layout';

export default function Sign() {
    return (
        <Layout>
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
        </Layout>
    )
}
