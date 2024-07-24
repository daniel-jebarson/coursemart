'use client'

import { useEffect } from 'react'
import { Form } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'
import { DynamicForm } from '@/components/index'
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
    <div className='container auth-container'>
      <DynamicForm config={verifyEmail} form={form} />
    </div>
  )
}

export default VerifyEmail
