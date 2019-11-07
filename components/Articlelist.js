import React from 'react'
import '../static/style/components/articlelist.css'
import { Icon, Avatar, List } from 'antd'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Articlelist = () => (
    <div className="articlelist">
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                  console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={listData}
            renderItem={item => (
              <List.Item
                  key={item.title}
                  actions={[
                    <IconText type="calendar" text="2019-11-12" key="list-vertical-calendar" />,
                    <IconText type="tags" text="react" key="list-vertical-tags" />
                  ]}
                  extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  }
              >
                  <List.Item.Meta
                    title={<a href={item.href} style={{ fontSize: 30 }}>{item.title}</a>}
                  />
                  {item.content}
              </List.Item>
            )}
        />
    </div>
)

export default Articlelist