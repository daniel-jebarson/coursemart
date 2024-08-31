'use client'
import { useEffect, useState } from 'react'
import { Button, Dropdown, Col, Row } from 'antd'
import { CourseItem } from '@/components/index'
import styles from './courseList.module.css'
import { makeGetCall } from '@/utils/formUtils'

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
const getUrl = '/course/search'
const CourseList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await makeGetCall(getUrl)
        console.log(data, 'data')
        setData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [getUrl])
  return (
    <>
      <div className={`${styles.panelHead} flex between`}>
        <h2>Showing {data?.length} courses</h2>
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
        {data.map((course) => {
          return (
            <Col span={24} className={`${styles.item} gutter-row`}>
              <CourseItem displayType={'single'} course={course} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default CourseList
