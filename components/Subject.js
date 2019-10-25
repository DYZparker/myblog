import React from 'react'
import '../static/style/components/subject.css'
import { Row, Col, Menu, Icon, Avatar, Divider, Tabs, Card, List } from 'antd'

const { TabPane } = Tabs
const { Meta } = Card
const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ]

function callback(key) {
    console.log(key);
  }

const Subject = () => (
    <div className="subject">
        <Tabs className="subject-tabs" defaultActiveKey="1" onChange={callback}>
            <TabPane className="subject-tabs-tabpane" tab="Html" key="1">
            <Card
                hoverable
                style={{ width: 160 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
                )}
            />
            </TabPane>
            <TabPane tab="JavaScript" key="2">
                Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Node" key="3">
                Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Vue" key="4">
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="React" key="5">
                Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Other" key="6">
                Content of Tab Pane 3
            </TabPane>
        </Tabs>
    </div>
)

export default Subject