import React from 'react'
import Vendor from '../../Pages/Vendor';
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
const data = [
    {
        key: '1',
        name: 'John',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default function Payment() {
    return (
        <Vendor>
            <div className="header_of_sell_history">
                <h2>Payment</h2>
            </div>
            <div className="body_of_sell_history">
                <Table dataSource={data}>
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Age" dataIndex="age" key="age" />
                    <Column title="Address" dataIndex="address" key="address" />
                    <Column
                        title="Tags"
                        dataIndex="tags"
                        key="tags"
                        render={(tags) => (
                            <>
                                {tags.map((tag) => (
                                    <Tag color="blue" key={tag}>
                                        {tag}
                                    </Tag>
                                ))}
                            </>
                        )}
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                                <a>Invite {record.lastName}</a>
                                <a>Delete</a>
                            </Space>
                        )}
                    />
                </Table>
            </div>


        </Vendor>
    )
}
