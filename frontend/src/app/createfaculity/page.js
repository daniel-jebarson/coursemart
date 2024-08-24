'use client'
import { Form } from 'antd'
import { DynamicForm, CustomLayout, Auth } from '@/components/index'
import createFaculity from '@/config/createfaculity'
import Link from 'next/link'

const CreateFaculity = () => {
  const [form] = Form.useForm()
  return (

    <CustomLayout title='Create Faculity'>
    <DynamicForm
      form={form}
      config={createFaculity}
      className='field-container'
    />
  </CustomLayout>
  )
}

export default  Auth(CreateFaculity) 
