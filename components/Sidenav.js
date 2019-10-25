import React, {useState} from 'react'
import '../static/style/components/sidenav.css'
import { Row, Col, Menu, Icon, Avatar, Divider } from 'antd'

const { SubMenu } = Menu

class Sidenav extends React.Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5', 'sub6', 'sub7'];

    state = {
        openKeys: [''],
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                this.setState({ openKeys })
            } else {
                this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            })
        }
    }

    render() {
        return (
            <div className="sidenav">
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 256 }}
                >
                <Divider>笔记分类</Divider>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Html</span>
                            </span>
                    }
                    >
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="appstore" />
                            <span>JavaScript</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                            <Icon type="setting" />
                            <span>Node</span>
                            </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub5"
                        title={
                            <span>
                            <Icon type="setting" />
                            <span>Vue</span>
                            </span>
                        }
                    >
                        <Menu.Item key="13">Option 13</Menu.Item>
                        <Menu.Item key="14">Option 14</Menu.Item>
                        <Menu.Item key="15">Option 15</Menu.Item>
                        <Menu.Item key="16">Option 16</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub6"
                        title={
                            <span>
                            <Icon type="setting" />
                            <span>React</span>
                            </span>
                        }
                    >
                        <Menu.Item key="17">Option 17</Menu.Item>
                        <Menu.Item key="18">Option 18</Menu.Item>
                        <Menu.Item key="19">Option 19</Menu.Item>
                        <Menu.Item key="20">Option 20</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub7"
                        title={
                            <span>
                            <Icon type="setting" />
                            <span>Other</span>
                            </span>
                        }
                    >
                        <Menu.Item key="21">Option 21</Menu.Item>
                        <Menu.Item key="22">Option 22</Menu.Item>
                        <Menu.Item key="23">Option 23</Menu.Item>
                        <Menu.Item key="24">Option 24</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )

    }
}

export default Sidenav