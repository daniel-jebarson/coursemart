import { Button, Dropdown, Col, Row } from 'antd'
import { CourseItem } from '@/components/index'
import styles from './courseList.module.css'

const items = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
        3rd menu item
      </a>
    ),
  },
]
const CourseList = () => {
  return (
    <>
      <div className={`${styles.panelHead} flex between`}>
        <h2>Showing 620 courses</h2>
        <Dropdown
          menu={{
            items,
          }}
          placement='Sort by Relevancy'
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>Sort by Relevancy</Button>
        </Dropdown>
      </div>
      <Row gutter={20}>
        <Col span={24} className={`${styles.item} gutter-row`}>
          <CourseItem displayType={'single'} />
        </Col>
        <Col span={24} className={`${styles.item} gutter-row`}>
          <CourseItem displayType={'single'} />
        </Col>
        <Col span={24} className={`${styles.item} gutter-row`}>
          <CourseItem displayType={'single'} />
        </Col>
        <Col span={24} className={`${styles.item} gutter-row`}>
          <CourseItem displayType={'single'} />
        </Col>
        <Col span={24} className={`${styles.item} gutter-row`}>
          <CourseItem displayType={'single'} />
        </Col>
        <Col span={24} className={`${styles.item} gutter-row`}>
          <CourseItem displayType={'single'} />
        </Col>
      </Row>
    </>
  )
}

export default CourseList
