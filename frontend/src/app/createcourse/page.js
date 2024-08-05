'use client'
import { Form } from 'antd'
import { DynamicForm, CustomLayout } from '@/components/index'
import createCourse from '@/config/createcourse'
import styles from './createcourse.module.css'

const CreateCourse = () => {
  const [form] = Form.useForm()
  return (
    <CustomLayout title='Create Course'>
      <div className={styles.body}>
        <DynamicForm config={createCourse} />
      </div>
    </CustomLayout>
  )
}

export default CreateCourse
