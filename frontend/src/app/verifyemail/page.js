'use client'

import { useEffect } from 'react'
import { pathOr } from 'ramda'
import { useSelector } from 'react-redux'
import { Form } from 'antd'
import { DynamicForm, Header } from '@/components/index'
import verifyEmail from '@/config/verifyemail'

const VerifyEmail = () => {
  const signupDetails = useSelector((state) => state?.user?.signupDetails)
  const id = pathOr(null, ['_id'], signupDetails)
  const email = pathOr(null, ['email'], signupDetails)
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
