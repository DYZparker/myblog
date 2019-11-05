import React from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import '../static/style/components/detail.css'
import { Row, Col, Affix } from 'antd'
import Author from './Author'
// import Sidenav from './Sidenav'
// import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'

import appMarkdown from '../static/md/koa2.md'


const Detail = () => {

    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer, 
        gfm: true,  //启动类似Github样式的Markdown
        pedantic: false,    //只解析符合Markdown定义的，不修正Markdown的错误
        sanitize: false,    //原始输出，忽略HTML标签
        tables: true,   //支持Github形式的表格，必须打开gfm选项
        breaks: false,  //支持Github换行符，必须打开gfm选项
        smartLists: true,   //优化列表输出
        smartypants: false, //高亮显示规则
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
      }); 
    
    let html = marked(appMarkdown)
    
    return(
        <div className="detail">
            <Row className="detail-row" type="flex" justify="center">
                <Col className="detail-left" xs={24} sm={24} md={24} lg={18} xl={14}>
                    <div className="detail-article">
                        <div className="detail-article-title">title</div>
                        <div className="detail-article-content" dangerouslySetInnerHTML = {{__html:html}}></div>
                    </div>
                </Col>
                <Col className="detail-right" xs={0} sm={0} md={0} lg={5} xl={4}>
                    <Author />
                    {/* <Sidenav /> */}
                    <Affix className="detail-affix" offsetTop={50}>
                        <div className="detail-nav">
                            <div className="detail-nav-title">文章目录</div>
                            {/* <MarkNav
                                className="detail-article-menu"
                                source={appMarkdown}
                                ordered={false}
                            /> */}
                        </div>
                    </Affix>
                </Col>
            </Row>
        </div>
    )
}

export default Detail