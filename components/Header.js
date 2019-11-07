import React, {useState} from 'react'
import '../static/style/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'

const { SubMenu } = Menu

const Header = () => {
    const [current, setCurrent] = useState('home')

    const handleClick = e => {
        console.log('click ', e.key)
        setCurrent({
          current: e.key
        })
        Router.push('/notes')
    }
    const handle = async () => {
        await axios.get('http://localhost:3000/users').then((res) => {
            console.log(res)
        })
    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={10}>
                    <span className="header-title">
                        <Link href='/'>
                            <a>云中的博客</a>
                        </Link>
                    </span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={8}>
                    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="home">
                            <Icon type="home" />
                            网站首页
                        </Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                    <Icon type="book" />
                                    学习笔记
                                </span>
                            }
                        >
                        <Menu.Item key="html">Html</Menu.Item>
                        <Menu.Item key="javascript">JavaScript</Menu.Item>
                        <Menu.Item key="node">Node</Menu.Item>
                        <Menu.Item key="vue">Vue</Menu.Item>
                        <Menu.Item key="react">React</Menu.Item>
                        <Menu.Item key="other">Other</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="experiment">
                            <Icon type="experiment" />
                            项目实战
                        </Menu.Item>
                        <Menu.Item key="aboutme">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                <Icon type="idcard" />
                                关于我
                            </a>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}


export default Header