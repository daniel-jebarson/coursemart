'use client'
import { Form } from 'antd'
import { DynamicForm, Header } from '@/components/index'
import signin from '@/config/signin'
import Link from 'next/link'

const Signin = () => {
  const [form] = Form.useForm()
  return (

    <div className='main'>
    <Header />
    <div className='container auth-container'>
      <div className='loginBlock'>
        <h2>Signin</h2>
        <DynamicForm config={signin} form={form} />
        <h6 className='lightText text-center mb-2'>By signing up, you agree to coursemart.com Terms of Service & Privacy Policy.</h6>
        <p className='text-center'>Doesn’t have an account? <Link href="/signup">Signup</Link></p>
      </div>
    </div>
    </div>
  )
}

export default Signin
