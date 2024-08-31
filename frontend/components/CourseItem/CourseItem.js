import { Image, Row, Col, Button } from 'antd'
import {
  FieldTimeOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  LaptopOutlined,
} from '@ant-design/icons'
import styles from './courseItem.module.css'
import Link from 'next/link'

const CourseItem = (props) => {
  const type = props.displayType
  console.log(type)
  const { course } = props

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
          {course.InstituteName}
        </Button>
        <h2>{course.courseTitle}</h2>
        <p>{course.Description}</p>
        <Row gutter={20} className={styles.pointsBlock}>
          <Col
            span={`${type === 'single' ? '6' : '12'}`}
            className={`${styles.coursePoints} gutter-row`}
          >
            <FieldTimeOutlined />
            {course.Duration}
          </Col>

          <Col
            span={`${type === 'single' ? '6' : '12'}`}
            className={`${styles.coursePoints} gutter-row`}
          >
            <CalendarOutlined />
            {course.teachingLanguage[0]}
          </Col>
          <Col
            span={`${type === 'single' ? '6' : '12'}`}
            className={`${styles.coursePoints} gutter-row`}
          >
            <SafetyCertificateOutlined />
            {course.Certificate ? 'Certificate' : null}
          </Col>
          <Col
            span={`${type === 'single' ? '6' : '12'}`}
            className={`${styles.coursePoints} gutter-row`}
          >
            <LaptopOutlined />
            {course.teachingMode[0]}
          </Col>
        </Row>
        {type === 'single' ? (
          <Link
            href={`/course/${course._id}/${course.courseTitle}`}
            type='link'
            className={styles.linkBtn}
          >
            View Course Details
          </Link>
        ) : (
          <Link type='primary' size='large' ghost block>
            View Course Details
          </Link>
        )}
      </div>
    </div>
  )
}

export default CourseItem
