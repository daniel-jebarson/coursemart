'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Button, Space, Tag, Avatar, Modal } from "antd";
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import DataTable from '@/components/DataTable/Datatable';
import Sidebar from '@/components/Sidebar';

import '../globals.css'
import styles from './dashboard.module.css'

const Dashboard = ({ courses }) => {
  const handleDelete = () => console.log('Delete clicked');
  const handleEdit = () => console.log('Edit clicked')
  const columns = [
    {
      title: "Course Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Instructor Id",
      dataIndex: "instructor",
      key: "instructor",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "No of Reviews",
      dataIndex: "numReviews",
      key: "numReviews",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Sessions",
      dataIndex: "sessions",
      key: "sessions",
    },
    {
      title: "Students Enrolled",
      dataIndex: "studentsEnrolled",
      key: "studentsEnrolled",
    },
    {
      title: "Course Duration",
      dataIndex: "courseDuration",
      key: "courseDuration",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text) => <Tag key={text}>{text.toUpperCase()}</Tag>,
    },
    {
      title: "Action",
      key: "9",
      render: () => (
        <Space size="middle">
          <EditOutlined  onClick={() => handleEdit()}/>
          <DeleteOutlined  danger onClick={() => handleDelete()} />
          {/* <Button type="primary" onClick={() => handleEdit()}>Edit</Button>
          <Button type="primary" danger onClick={() => handleDelete()}>Delete</Button> */}
        </Space>
      ),
    },
  ];


  return (
    <div>
      <div className={styles.main}>
        <div className={`${styles.header} flex center between`}>
          <h2>Dashboard</h2>
      <div className='flex center '>
                <div className={styles.search}>
                </div>
                <div className=''>
                <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
                </div>
            </div> 
            </div>
        <Sidebar />

        <div className={styles.body}>
          <div className={`${styles.card } flex between`}>
                <div className={styles.box}>
                  <label>Total Courses</label> <br />
                  <b>24</b>
                </div>
                <div className={styles.box}>
                  <label>Total Students</label> <br />
                  <b>600</b>
                </div>
                <div className={styles.box}>
                  <label>Total Sales</label> <br />
                  <b>200</b>
                </div>
                <div className={styles.box}>
                  <label>Total Revenue</label> <br />
                  <b>1,40,000 INR</b>
                </div>
          </div>

          <div className="flex between mb-2">
              <h2>Course List</h2>
              <Button  size="large" type="primary" >Create Course</Button>
          </div>
          <DataTable data={courses} columns={columns} />
        </div>
      </div>
    
    </div>
  );
};

export default Dashboard;
