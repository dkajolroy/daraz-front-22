import '../Components/Vendor/vendor.css'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LineChartOutlined,
    ShoppingOutlined,
    AppstoreOutlined,
    SnippetsOutlined,
    FormOutlined,
    ShoppingCartOutlined,
    UserSwitchOutlined,
    UsergroupAddOutlined,
    CommentOutlined,
    SettingOutlined,
    LogoutOutlined,
    SafetyCertificateOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom"
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOutAction } from '../Redux/Actions/vendorAction';
const { Header, Sider, Content } = Layout;

const Vendor = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logOutAction())
        navigate('/')
    }
    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}

            >
                <div className="logo logo_of_vendor" >
                    <img src={collapsed ? "https://icms-image.slatic.net/images/ims-web/8b2d6987-27b8-4832-8178-5cd99ba56c7a.png" : "https://upload.wikimedia.org/wikipedia/commons/5/5b/Daraz_Logo.png"} alt="" />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={window.location.pathname}
                >
                    <Menu.Item key="/vendor" icon={<AppstoreOutlined />}>
                        <Link to={'/vendor'}>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key='/vendor/add-product' icon={<FormOutlined />}>
                        <Link to={'/vendor/add-product'}>Add Product</Link>
                    </Menu.Item>
                    <Menu.Item key='/vendor/products' icon={<SnippetsOutlined />}>
                        <Link to={'/vendor/products'}>Products</Link>
                    </Menu.Item>
                    <Menu.Item key='/vendor/order' icon={<ShoppingCartOutlined />}>
                        <Link to={'/vendor/order'}>Order</Link>
                    </Menu.Item>
                    <Menu.Item key='/vendor/sell' icon={<LineChartOutlined />}>
                        <Link to={'/vendor/sell'}>Sell History</Link>
                    </Menu.Item>
                    <Menu.Item key='/vendor/customer' icon={<UsergroupAddOutlined />}>
                        <Link to={'/vendor/customer'}>Customer</Link>
                    </Menu.Item>
                    <Menu.Item key='/vendor/store' icon={<ShoppingOutlined />}>
                        <Link to={'/vendor/store'}>View Store</Link>
                    </Menu.Item>
                    <Menu.Item key='/vendor/reviews' icon={<CommentOutlined />}>
                        <Link to={'/vendor/reviews'}>Reviews</Link>
                    </Menu.Item>
                    <Menu.Item key='/vendor/support' icon={<UserSwitchOutlined />}>
                        <Link to={'/vendor/support'}>Support</Link>
                    </Menu.Item>
                    <Menu.Item key='/vendor/payment' icon={<SafetyCertificateOutlined />}>
                        <Link to={'/vendor/payment'}>Payment</Link>
                    </Menu.Item>
                    <Menu.Item key='/vendor/setting' icon={<SettingOutlined />}>
                        <Link to={'/vendor/setting'}>Setting</Link>
                    </Menu.Item>
                    <Menu.Item onClick={logOut} key='' icon={<LogoutOutlined />}>
                        <div className="logout_menu_items">
                            <span>Logout</span>
                        </div>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    <div className="top_nav_of_admin_dashboard me-3 d-flex justify-content-between">
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        <div className="d-flex align-items-center">
                            <div className="store_name me-2">
                                <h5>Bonni Store</h5>
                            </div>
                            <div className="profile_icons_of_dashboard">
                                <img className='img-fluid rounded-circle' src="https://res.cloudinary.com/kajolroy/image/upload/v1654269448/facebook/default_image/user_u7qetf.png" alt="store" />
                            </div>
                        </div>
                    </div>

                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Vendor;