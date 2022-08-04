import React from 'react'
import '../vendor.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

export default function VLogin() {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div className="login__admin_only__without_register">
            <div className="form_box_of_vendor col-md-6">
                <div className='login__by_vendor col-md-6'>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email address" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    min: 4,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                size='large'
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
