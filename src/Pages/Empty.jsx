import React from 'react'
import Layout from './../Components/Common/Layout';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Empty() {
    const navigate = useNavigate()
    return (
        <Layout>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button onClick={() => navigate('/')} type="primary">Back Home</Button>}
            />
        </Layout>
    )
}
