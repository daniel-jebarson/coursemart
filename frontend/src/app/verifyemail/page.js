'use client'

import { useEffect } from 'react'
import { Form } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'
import { DynamicForm, Header } from '@/components/index'
import verifyEmail from '@/config/verifyemail'

const VerifyEmail = () => {
  const { query } = useRouter()
  const searchParams = useSearchParams()
  const [form] = Form.useForm()

  useEffect(() => {
    if (searchParams.get('id') && searchParams.get('email')) {
      form.setFieldsValue({
        id: searchParams.get('id'),
        email: searchParams.get('email'),
      })
    }
  }, [searchParams, form])

  return (

    <div className='main'>
    <Header />
    <div className='container auth-container'>
      <div className='loginBlock'>
        <h2>VerifyEmail</h2>
        <DynamicForm config={verifyEmail} form={form} />
      </div>
    </div>
    </div>

  )
}

export default VerifyEmail
