import React from 'react'
import '../static/style/components/main.css'
import { Row, Col, Carousel  } from 'antd'
import Subject from './Subject'
import Articlelist from './Articlelist'
import Author from './Author'
import Sidetag from './Sidetag'

const Main = () => (
    <div className="main">
        <Row className="main-row" type="flex" justify="center">
            <Col className="main-left" xs={24} sm={24} md={24} lg={18} xl={14}>
                <Carousel className="carousel" effect="fade" autoplay>
                    <div>
                        <img src="../static/image/11.png" />
                    </div>
                    <div>
                        <img src="../static/image/12.png" />
                    </div>
                    <div>
                        <img src="../static/image/13.jpg" />
                    </div>
                </Carousel>
                <Subject></Subject>
                <Articlelist></Articlelist>
            </Col>
            <Col className="main-right" xs={0} sm={0} md={0} lg={5} xl={4}>
                <Author />
                <Sidetag />
            </Col>
        </Row>
    </div>
)

export default Main