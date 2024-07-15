import { Col, Row } from 'antd'
import { CourseList, Filters } from '@/components/index'
import styles from './courses.module.css'
const Courses = () => {
  return (
    <div className={styles.courses}>
      <div className='container'>
        {false ? (
          <CourseList />
        ) : (
          <Row gutter={20}>
            <Col span={6} className={`${styles.item} gutter-row`}>
              <Filters />
            </Col>
            <Col span={18} className={`${styles.item} gutter-row`}>
              <CourseList />
            </Col>
          </Row>
        )}
      </div>
    </div>
  )
}

export default Courses
