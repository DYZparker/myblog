import React from 'react'
import '../static/style/components/detail.css'
import { Row, Col, Menu, Icon, Avatar, Divider } from 'antd'
import Author from './Author'
import Sidenav from './Sidenav'

const Detail = () => (
    <div className="detail">
        <Row className="detail-row" type="flex" justify="center">
            <Col className="detail-left" xs={24} sm={24} md={24} lg={18} xl={14}>
                <div className="detail-left-content">detail</div>
            </Col>
            <Col className="detail-right" xs={0} sm={0} md={0} lg={5} xl={4}>
                <Author />
                <Sidenav />
                <div>hi</div>
            </Col>
        </Row>
    </div>
)

export default Detail