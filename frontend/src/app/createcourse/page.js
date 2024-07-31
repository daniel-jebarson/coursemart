'use client'
import { Form } from 'antd'
import { DynamicForm } from '@/components/index'
import signin from '@/config/signin'

const CreateCourse = () => {
  const [form] = Form.useForm()
  return (
    <div className='main'>
      <div className='container'>
        <h2>Create Course</h2>
        <DynamicForm config={signin} form={form} />
      </div>
    </div>
  )
}

export default CreateCourse
