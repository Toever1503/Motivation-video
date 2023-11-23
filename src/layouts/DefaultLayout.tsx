import React, { useState } from 'react';
import {
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Layout, Menu, Space, theme } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [isLogged, setIsLogged] = useState<boolean>(false);

    const items: MenuProps['items'] = [
        {
            label: (
                <Link rel="noopener noreferrer" to="/account/profile">
                    Profile
                </Link>
            ),
            key: '0',
        }, {
            label: (
                <Link rel="noopener noreferrer" to="/account/my-upload-video">
                    Video của tôi
                </Link>
            ),
            key: '0',
        },

    ];


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ padding: 0, background: colorBgContainer }} >
                <Space className="font-[600] justify-center items-center w-full h-full text-base" size={20}>
                    <Link to='/'>
                        <img className='w-[100px]' src='https://sportshoes.web.app/cover.png' />
                    </Link>
                    <Link to="/">Motivation</Link>
                    <Link to="/relax">Relax</Link>
                    <Link to="/upload-new-video">Upload new video</Link>

                    {
                        isLogged ? <Dropdown menu={{ items }}>
                            <div className="flex gap-[8px] text-sm items-center cursor-pointer">
                                <span> Orisu</span>
                                <UserOutlined rev={undefined} />
                            </div>
                        </Dropdown> :
                            <Link to="/login">Đăng nhập</Link>
                    }


                </Space>
            </Header>

            <Content style={{ margin: '0 16px' }}>
                <div className='mt-[20px] max-w-[1200px] mx-auto'>
                    <Outlet />
                </div>
            </Content>



            <Footer style={{ textAlign: 'center' }}>Copyright ©2023 by Orisu - All rights Reserved</Footer>
        </Layout>
    );
};

export default App;