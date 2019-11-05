import React from 'react'
import '../static/style/components/author.css'
import { Icon, Avatar, Divider } from 'antd'

const Author = () => (
    <div className="autor">
        <Avatar className="autor-avatar" size={100} icon="user" src="../static/image/ssw.jpg" />
        <div className="autor-content">
            <p>Web前端学习，Vue、React框架实践，个人服务器端搭建</p>
            <Divider>联系方式</Divider>
            <div className="autor-account"><a href="http://www.baidu.com"><Icon type="github" /></a><span>：http://www.baidu.com</span></div>
            <div className="autor-account"><a><Icon type="qq" /></a><span>：182345999</span></div>
            <div className="autor-account"><a><Icon type="wechat" /></a><span>：d13880777416</span></div>
            <div className="autor-account"><a><Icon type="mail" /></a><span>：182345999@qq.com</span></div>
        </div>
    </div>
)

export default Author