'use client'
import { Form } from 'antd'
import { DynamicForm, CustomLayout, Auth } from '@/components/index'
import createInstitute from '@/config/createinstitute'
import Link from 'next/link'

const CreateInstitute = () => {
  const [form] = Form.useForm()
  return (

    <CustomLayout title='Update Institute'>
    <DynamicForm
      form={form}
      config={createInstitute}
      className='field-container'
    />
  </CustomLayout>
  )
}

export default Auth(CreateInstitute)  
