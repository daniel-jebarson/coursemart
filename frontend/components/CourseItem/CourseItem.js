import { Image, Row, Col, Button } from 'antd'
import {
  FieldTimeOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  LaptopOutlined,
} from '@ant-design/icons'
import styles from './courseItem.module.css'

const CourseItem = (props) => {
  const type = props.displayType

  return (
    <div className={`${styles.course} ${type === 'single' ? 'flex' : ''} `}>
      <div className={styles.img}>
        <Image
          height={`${type === 'single' ? '100%' : '200px'}`}
          width={`${type === 'single' ? '240px' : '100%'}`}
          src={
            'https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=750&q=75'
          }
          preview={false}
        />
      </div>
      <div className={styles.content}>
        <Button type='link' className={styles.linkBtn}>
          Naresh IT Solutions
        </Button>
        <h2>Mastering Next.js 13 with TypeScript</h2>
        <p>
          Everything you need to build full-stack applications with Next.js 13+
          (App Router) and TypeScript
        </p>
        <Row gutter={20} className={styles.pointsBlock}>
          <Col
            span={`${type === 'single' ? '6' : '12'}`}
            className={`${styles.coursePoints} gutter-row`}
          >
            <FieldTimeOutlined />
            14 Weeks
          </Col>

          <Col
            span={`${type === 'single' ? '6' : '12'}`}
            className={`${styles.coursePoints} gutter-row`}
          >
            <CalendarOutlined />
            Weekday Classes
          </Col>
          <Col
            span={`${type === 'single' ? '6' : '12'}`}
            className={`${styles.coursePoints} gutter-row`}
          >
            <SafetyCertificateOutlined />
            Certificate
          </Col>
          <Col
            span={`${type === 'single' ? '6' : '12'}`}
            className={`${styles.coursePoints} gutter-row`}
          >
            <LaptopOutlined />
            Online Classes
          </Col>
        </Row>
        {type === 'single' ? (
          <Button type='link' className={styles.linkBtn}>
            View Course Details
          </Button>
        ) : (
          <Button type='primary' size='large' ghost block>
            View Course Details
          </Button>
        )}
      </div>
    </div>
  )
}

export default CourseItem
