'use client'
import { useEffect, useState } from 'react'
import { Image, Anchor, Collapse, Row, Col, Button } from 'antd'
import {
  CheckOutlined,
  SafetyCertificateFilled,
  SafetyCertificateOutlined,
  UserOutlined,
  FieldTimeOutlined,
  PhoneFilled,
  ShopOutlined,
  EnvironmentOutlined,
  HighlightOutlined,
  CrownOutlined,
} from '@ant-design/icons'
// import { useRouter } from 'next/router'
import styles from './single.module.css'
import { Header } from '@/components'
import { makeGetCall } from '@/utils/formUtils'
import PointsBlock from '@/components/PointsBlock/PointsBlock'

const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`
const points = [
  'What is Node.js?',
  'History and evolution',
  'Use cases and scenarios',
]

//
const items = [
  {
    key: '1',
    label: <b>Introduction to Node.js</b>,
    children: points.map((item, key) => (
      <li key={item} className={styles.points}>
        {item}
      </li>
    )),
  },
  {
    key: '2',
    label: 'Installing Node.js',
    children: <p>{text}</p>,
  },
]
const onChange = (key) => {
  console.log(key)
}

const Page = ({ params }) => {
  console.log(params, 'username')
  const getUrl = `/course/${params.id}`
  const [course, setCourse] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await makeGetCall(getUrl)
        console.log(data, 'data')
        setCourse(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  console.log(course)

  return (
    <div className='App'>
      <div className='main'>
        {/* <Header /> */}
        <Header />

        <div className={styles.banner}>
          <div className='container'>
            <Row gutter={20}>
              <Col span={17} className={`${styles.item} gutter-row`}>
                <div className={styles.content}>
                  <h1>{course?.courseTitle}</h1>
                  <p>{course?.Description}</p>
                  <div className={`${styles.rating} flex center`}>
                    <Image
                      src={
                        'https://codewithmosh.com/_next/static/media/4.5.fbc139f3.svg'
                      }
                      alt='sample'
                      width={'100px'}
                      preview={false}
                    />
                    <Anchor className={styles.ratingText} to=''>
                      6000 Students
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className=''>
          <div className='container'>
            <Row gutter={20}>
              <Col span={17} className={`${styles.item} gutter-row`}>
                <PointsBlock
                  title="What you'll learn"
                  content={course?.LearningOutcomes}
                />

                <div className={styles.courseContent}>
                  <div className='container'>
                    <h2>Course content</h2>
                    <Collapse
                      items={items}
                      defaultActiveKey={['1']}
                      onChange={onChange}
                    />
                  </div>
                </div>

                <PointsBlock
                  title='Key Features'
                  content={course?.keyFeatures}
                />

                <PointsBlock
                  title='Prerequisites'
                  content={course?.Prerequisites}
                />
              </Col>

              <Col span={7} className={`${styles.priceBox} gutter-row`}>
                <div className={styles.priceBlock}>
                  <Image
                    height={150}
                    width={'100%'}
                    src={
                      'https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=750&q=75'
                    }
                    preview={false}
                    alt='test'
                  />

                  <div className=''>
                    <div className={styles.price}>
                      <b> 9000 INR </b> <span>20000</span> 60% off
                    </div>
                    <div className=''>
                      <Button type='primary' size='large' block>
                        Buy this Course
                      </Button>

                      <span className={styles.smallText}>
                        100% Money-Back Guarantee
                      </span>
                    </div>
                  </div>

                  <div className={styles.course}>
                    <div className={styles.course_block}>
                      <ShopOutlined />
                      <b>
                        <Anchor href='#' to=''>
                          Naresh IT Technoligy
                        </Anchor>
                      </b>
                    </div>
                    <div className={styles.course_block}>
                      <EnvironmentOutlined />
                      <b>Ammerpet, Hyderabad </b>
                    </div>
                    <div className={styles.course_block}>
                      <HighlightOutlined />
                      <b>English </b>
                    </div>
                    <div className={styles.course_block}>
                      <CrownOutlined />
                      <b> Job Guarantee</b>
                    </div>
                    <div className={styles.course_block}>
                      <PhoneFilled />
                      <div className={styles.dail}>
                        <b> + 91 7702890893</b>
                        <span className={styles.smalltext}>
                          Available 24x7 for your queries
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
