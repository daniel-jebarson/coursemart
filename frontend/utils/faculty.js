import { Space, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

export const getColumns = (handleEdit, handleDelete) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Experience',
    dataIndex: 'experience',
    key: 'experience',
  },
  {
    title: 'Qualification',
    dataIndex: 'qualification',
    key: 'qualification',
  },
  {
    title: 'About',
    dataIndex: 'About',
    key: 'About',
  },
  
  {
    title: 'Action',
    key: '9',
    render: (record) => (
      <Space size='middle'>
        <EditOutlined onClick={() => handleEdit()} />
        <DeleteOutlined danger onClick={(val) => handleDelete(record)} />
        {/* <Button type="primary" onClick={() => handleEdit()}>Edit</Button>
          <Button type="primary" danger onClick={() => handleDelete()}>Delete</Button> */}
      </Space>
    ),
  },
]
