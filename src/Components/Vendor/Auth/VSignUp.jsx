import {
    Button,
    Checkbox,
    Form,
    Input,
    DatePicker,
    Select,
} from 'antd';
import React from 'react';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export default function VLogin() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="88">+88</Option>
                <Option value="11">+11</Option>
            </Select>
        </Form.Item>
    );


    return (
        <div className="register_vendor_without_register">
            <div className="form_box_of_vendor col-md-6">
                <div className='login__by_vendor '>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                            prefix: '88',
                        }}
                        scrollToFirstError
                    >

                        {/* Name */}
                        <Form.Item
                            name="name"
                            label="Your Name"
                            rules={[
                                {
                                    type: 'text',
                                    message: 'Name is invalid !',
                                },
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                                {
                                    min: 3,
                                    message: 'Please input your valid name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        {/* Email address */}
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'Invalid email address !',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        {/* Phone Number */}
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                }, {
                                    type: Number,
                                    message: 'Invalid phone number !',
                                },
                                {
                                    min: 11,
                                    message: 'Please input your valid number!',
                                },
                                {
                                    max: 11,
                                    message: 'Please input your valid number!',
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                        {/* Password */}
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    min: 5,
                                    message: 'Minimum 5 character required !',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>
                        {/* Confirm Password */}
                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        {/* Date of birth */}

                        <Form.Item
                            name="dateOfBirth"
                            label="Date of Birth"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select date Of Birth!',
                                },
                            ]}
                        >
                            <DatePicker />
                        </Form.Item>


                        {/* GEnder */}
                        <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select gender!',
                                },
                            ]}
                        >
                            <Select placeholder="select your gender">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                            </Select>
                        </Form.Item>


                        {/* Store Name */}
                        <Form.Item
                            name="store"
                            label="Store Name"
                            tooltip="What is your store name ?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Store name!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        {/* Aggregations */}
                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Create Store
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
