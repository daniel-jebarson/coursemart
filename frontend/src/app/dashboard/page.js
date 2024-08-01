'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link'
import { Button, Avatar } from 'antd'
import DataTable from '@/components/DataTable/Datatable'
import { Sidebar, SignoutBtn, Auth } from '@/components/index'
import { getColumns } from '@/utils/dashboard'
import '../globals.css'
import styles from './dashboard.module.css'

const Dashboard = ({ courses }) => {
  const handleDelete = () => console.log('Delete clicked')
  const handleEdit = () => console.log('Edit clicked')

  return (
    <div className={styles.main}>
      <div className={`${styles.header} flex center between`}>
        <h2>Dashboard</h2>
        <div className='flex center'>
          <div className={styles.search}></div>
          <div className=''>
            <SignoutBtn />
            <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
              U
            </Avatar>
          </div>
        </div>
      </div>
      <Sidebar />

      <div className={styles.body}>
        <div className={`${styles.card} flex between`}>
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

        <div className='flex between mb-2'>
          <h2>Course List</h2>
          <Link href='/createcourse'>
            <Button size='large' type='primary'>
              Create Course
            </Button>
          </Link>
        </div>
        <DataTable
          data={courses}
          columns={getColumns(handleEdit, handleDelete)}
        />
      </div>
    </div>
  )
}

export default Auth(Dashboard)
