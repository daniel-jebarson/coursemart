'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Form } from 'antd'
import { DynamicForm, Header } from '@/components/index'
import verifyEmail from '@/config/verifyemail'

const VerifyEmail = () => {
  const signupFormData = useSelector((state) => state?.user?.signupFormData)
  const { id, email } = signupFormData
  const [form] = Form.useForm()

  useEffect(() => {
    if (id && email) {
      form.setFieldsValue({
        id,
        email,
      })
    }
  }, [form, id, email])

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
