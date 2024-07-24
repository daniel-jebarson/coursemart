'use client'
import { Form } from 'antd'
import { DynamicForm } from '@/components/index'
import signin from '@/config/signin'

const Signin = () => {
  const [form] = Form.useForm()
  return (
    <div className='container auth-container'>
      <DynamicForm config={signin} form={form} />
    </div>
  )
}

export default Signin
