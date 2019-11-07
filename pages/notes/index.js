import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Detail from '../../components/Detail'
import { Divider, BackTop, Icon } from 'antd'
import axios from 'axios'

import 'antd/dist/antd.css'
import '../../static/style/pages/comm.css'


const Notes = () => {
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

// Notes.getInitialProps = async ()=>{
//     const promise = new Promise((resolve)=>{
    //   axios('').then(
    //     (res)=>{
    //       //console.log('远程获取数据结果:',res.data.data)
    //       resolve(res.data)
    //     }
    //   )
//     })
  
//     return await promise
//   }

  export default Notes