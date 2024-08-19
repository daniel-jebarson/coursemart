'use client'
import { Form } from 'antd'
import { DynamicForm, CustomLayout, Auth } from '@/components/index'
import createCourse from '@/config/createcourse'
import styles from './createcourse.module.css'

const CreateCourse = () => {
  const [form] = Form.useForm()

  return (
    <CustomLayout title='Create Course'>
      <DynamicForm
        form={form}
        config={createCourse}
        className='field-container'
      />
    </CustomLayout>
  )
}

export default Auth(CreateCourse)
