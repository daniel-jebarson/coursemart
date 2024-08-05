'use client'
import { Form } from 'antd'
import { DynamicForm, Sidebar } from '@/components/index'
import createCourse from '@/config/createcourse'
import styles from './createcourse.module.css'

const CreateCourse = () => {
  const [form] = Form.useForm()
  return (
    <div className={styles.main}>
      <div className={`${styles.header} flex center between`}>
        <h2>Create Course</h2>
        <div className='flex center'>
          <div className={styles.search}></div>
          <div className=''>
            {/* <SignoutBtn /> */}
            {/* <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
              U
            </Avatar> */}
          </div>
        </div>
      </div>
      <Sidebar />

      <div className={styles.body}></div>
    </div>
  )
}

export default CreateCourse
