'use client'
import { Form } from 'antd'
import { DynamicForm } from '@/components/index'
import signup from '@/config/signup'

const Signup = () => {
  const [form] = Form.useForm()
  return (
    <div className='container auth-container'>
      <DynamicForm config={signup} form={form} />
    </div>
  )
}

export default Signup
