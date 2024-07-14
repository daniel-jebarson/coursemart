// components/DynamicForm.js
import React from 'react'
import { Form, Input, Button } from 'antd'

const DynamicForm = ({ config }) => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const renderFormItem = (type) => {
    // Define components for each type
    const components = {
      input: <Input />,
      password: <Input.Password />,
    }

    // Return the component for the specified type, or a default component
    return components[type] || <Input />
  }

  return (
    <Form
      form={form}
      name={config.formName}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      {config.fields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          rules={field.rules}
        >
          {renderFormItem[field?.type]}
        </Form.Item>
      ))}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default DynamicForm
