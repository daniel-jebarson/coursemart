'use client'

import { useEffect } from 'react'
import { pathOr } from 'ramda'
import { useSelector } from 'react-redux'
import { Form } from 'antd'
import { DynamicForm, Header } from '@/components/index'
import forgotPassword from '@/config/forgotpassword'

const ForgotPassword = () => {
  const signupFormData = useSelector((state) => state?.user?.signupFormData)
  const id = pathOr(null, ['_id'], signupFormData)
  const email = pathOr(null, ['email'], signupFormData)
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
          <h2>Forgot Password</h2>
          <DynamicForm config={forgotPassword} form={form} />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
