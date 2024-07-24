'use client'

import { Form, message } from 'antd'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setUserDetails } from '@/store/userSlice'
import { fieldVisibility, getFullUrl, renderFormItem } from '@/utils/formUtils'

const DynamicForm = ({ config, form }) => {
  const { formName, layout, fields, url, redirect } = config
  const router = useRouter()
  const dispatch = useDispatch()

  const onFinish = async (values) => {
    try {
      const response = await fetch(getFullUrl(url), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const data = await response.json()
      dispatch(setUserDetails(data))
      if (response.ok) {
        message.success(data.message)
        if (formName === 'signup' && !data?.verified) {
          router.push(`${redirect}?id=${data._id}&email=${data.email}`)
        }
      } else {
        message.error(`Error: ${data.message}`)
      }
    } catch (error) {
      message.error('Something failed, please check console')
      console.error(error)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      form={form}
      name={formName}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
      layout={layout}
      scrollToFirstError
    >
      {fields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          rules={field.rules}
          colon={false}
          style={fieldVisibility(field?.type)}
          {...field}
        >
          {renderFormItem(field)}
        </Form.Item>
      ))}
    </Form>
  )
}

export default DynamicForm
