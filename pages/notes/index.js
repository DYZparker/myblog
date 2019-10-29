import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Detail from '../../components/Detail'
import { Divider, BackTop, Icon } from 'antd'

import 'antd/dist/antd.css'
import '../../static/style/pages/comm.css'


export default () => {
    return(
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Header></Header>
            <Detail></Detail>
            <footer>
                <Divider></Divider>
            </footer>
            <div>
                <BackTop>
                    <div className="ant-back-top-inner">
                        <Icon type="to-top" />
                    </div>
                </BackTop>
            </div>
        </>
    )
}