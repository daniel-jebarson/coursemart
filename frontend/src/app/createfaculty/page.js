'use client'
import { Form } from 'antd'
import { DynamicForm, CustomLayout, Auth } from '@/components/index'
import createFaculty from '@/config/createfaculty'

const CreateFaculty = () => {
  const [form] = Form.useForm()
  return (
    <CustomLayout title='Create Faculity'>
      <DynamicForm
        form={form}
        config={createFaculty}
        className='field-container'
      />
    </CustomLayout>
  )
}

export default Auth(CreateFaculty)
