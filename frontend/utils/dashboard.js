import { Space, Tag } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

export const getColumns = (handleEdit, handleDelete) => [
  {
    title: 'Course Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Instructor Id',
    dataIndex: 'instructor',
    key: 'instructor',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'No of Reviews',
    dataIndex: 'numReviews',
    key: 'numReviews',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
  },
  {
    title: 'Students Enrolled',
    dataIndex: 'studentsEnrolled',
    key: 'studentsEnrolled',
  },
  {
    title: 'Course Duration',
    dataIndex: 'courseDuration',
    key: 'courseDuration',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (text) => <Tag key={text}>{text.toUpperCase()}</Tag>,
  },
  {
    title: 'Action',
    key: '9',
    render: () => (
      <Space size='middle'>
        <EditOutlined onClick={() => handleEdit()} />
        <DeleteOutlined danger onClick={() => handleDelete()} />
        {/* <Button type="primary" onClick={() => handleEdit()}>Edit</Button>
          <Button type="primary" danger onClick={() => handleDelete()}>Delete</Button> */}
      </Space>
    ),
  },
]
