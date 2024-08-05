'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link'
import { Button } from 'antd'
import DataTable from '@/components/DataTable/Datatable'
import { Auth, CustomLayout } from '@/components/index'
import { getColumns } from '@/utils/dashboard'
import styles from './dashboard.module.css'

const Dashboard = ({ courses }) => {
  const handleDelete = () => console.log('Delete clicked')
  const handleEdit = () => console.log('Edit clicked')

  return (
    <CustomLayout title='Dashboard'>
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
    </CustomLayout>
  )
}

export default Auth(Dashboard)
