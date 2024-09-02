'use client'
import React, {useState} from 'react'
import { Col, Image, Row, Rate } from 'antd';
import styles from './rating.module.css'

function index() {
  return (
    <div className={styles.review}>
         <Row gutter={16}>
      <Col className="gutter-row" span={4}>
        <div className={styles.image} >
        <Image
         width={100}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        preview={false}
        />
        <h4>Kushi</h4>
        </div>
       
      </Col>
      <Col className="gutter-row" span={20}>
        <div >
        <div className='flex center mb-1'>
                <Rate allowHalf defaultValue={4.5} disabled className='small'  style={{ color: '#1677ff' }}/>
                <p className='ml-3'>4.5 rating, 2 months ago</p>
                </div>
                <h3>Best course</h3>
                <p>This course assumed no background in Scala. It was a self-contained
                   course involving some hard problems. 
                  I had plenty of headaches while working on the homework assignments,</p>
        </div>
      </Col>
    </Row>
    </div>
  )
}

export default index