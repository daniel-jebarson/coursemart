'use client'
import { Form } from 'antd'
import { DynamicForm, Header } from '@/components/index'
import signup from '@/config/signup'
import Link from 'next/link'

const Signup = () => {
  const [form] = Form.useForm()
  return (
    <div className='main'>
    <Header />
    <div className='container auth-container'>
      <div className='loginBlock'>
        <h2>Signup</h2>
        <DynamicForm config={signup} form={form} />
        <h6 className='lightText text-center mb-2'>By signing up, you agree to coursemart.com Terms of Service & Privacy Policy.</h6>
        <p className='text-center'>Already have an account?  <Link href="/signin">Signin</Link></p>
      </div>
    </div>
    </div>
  )
}

export default Signup
