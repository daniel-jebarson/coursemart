'use client'
import { Form } from 'antd'
import { DynamicForm, CustomLayout } from '@/components/index'
import createCourse from '@/config/createcourse'
import styles from './createcourse.module.css'
import { useState } from 'react'

const CreateCourse = () => {
  const [form] = Form.useForm()
  // const [addQuill, setAddQuill] = useState()

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

export default CreateCourse
