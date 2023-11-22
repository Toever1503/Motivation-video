import React, { useState } from 'react';
import {
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Space, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { DashboardOutlined } from '@ant-design/icons/lib/icons';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ padding: 0, background: colorBgContainer }} >
                <Space className="font-[600] justify-center items-center w-full h-full text-base" size={20}>
                    <Link to='/'>
                        <img className='w-[100px]' src='https://sportshoes.web.app/cover.png' />
                    </Link>
                    <Link to="upload-new-video">Upload new video</Link>
                </Space>
            </Header>

            <Content style={{ margin: '0 16px' }}>
                <div className='mt-[20px] max-w-[1200px] mx-auto'>
                    <Outlet />
                </div>
            </Content>



            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default App;