import React from 'react'
import '../static/style/components/subject.css'
import { Avatar, Tabs, Card, List } from 'antd'

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
                cover={<img alt="example" src="../static/image/html.png" />}
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
            <TabPane className="subject-tabs-tabpane" tab="JavaScript" key="2">
            <Card
                hoverable
                style={{ width: 160 }}
                cover={<img alt="example" src="../static/image/js.png" />}
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
            <TabPane className="subject-tabs-tabpane" tab="Node" key="3">
            <Card
                hoverable
                style={{ width: 160 }}
                cover={<img alt="example" src="../static/image/node.png" />}
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
            <TabPane className="subject-tabs-tabpane" tab="Vue" key="4">
            <Card
                hoverable
                style={{ width: 160 }}
                cover={<img alt="example" src="../static/image/vue.png" />}
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
            <TabPane className="subject-tabs-tabpane" tab="React" key="5">
            <Card
                hoverable
                style={{ width: 160 }}
                cover={<img alt="example" src="../static/image/react.png" />}
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
            <TabPane className="subject-tabs-tabpane" tab="Other" key="6">
            <Card
                hoverable
                style={{ width: 160 }}
                cover={<img alt="example" src="../static/image/web.png" />}
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
        </Tabs>
        
    </div>
)

export default Subject