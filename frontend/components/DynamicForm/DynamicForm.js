'use client'

import {
  Form,
  Input,
  Button,
  Select,
  Radio,
  Checkbox,
  DatePicker,
  message,
} from 'antd'
import { useRouter } from 'next/navigation'

const getFullUrl = (path) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  return `${baseUrl}${path}`
}

const fieldVisibility = (type) => {
  if (type === 'hidden') {
    return { display: 'none' }
  }
  return {}
}

const DynamicForm = ({ config }) => {
  const { formName, layout, fields, url, redirect } = config
  const [form] = Form.useForm()
  const router = useRouter()

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
      if (response.ok) {
        message.success(data.message)
        if (formName === 'signup' && !data?.verified) {
          router.push(redirect)
        }
      } else {
        message.error(`Error: ${data.message}`)
      }
    } catch (error) {
      message.error('Network error, please try again later.')
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const formItemComponents = {
    input: <Input />,
    password: <Input.Password />,
    email: <Input type='email' />,
    number: <Input type='number' />,
    textarea: <Input.TextArea />,
    hidden: (initialValue) => (
      <Input type='hidden' defaultValue={initialValue} />
    ),
    select: (options) => (
      <Select>
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    ),
    radio: (options) => (
      <Radio.Group>
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    ),
    checkbox: (options) => (
      <Checkbox.Group>
        {options.map((option) => (
          <Checkbox key={option.value} value={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    ),
    date: <DatePicker />,
    button: (options) => (
      <Button
        type={options.type}
        htmlType={options.htmlType}
        onClick={options.onClick}
      >
        {options.label}
      </Button>
    ),
  }

  const renderFormItem = (field) => {
    const { type, options } = field
    const component = formItemComponents[type]

    if (typeof component === 'function') {
      return component(options)
    }

    return component
  }

  return (
    <Form
      form={form}
      name={formName}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
      layout={layout}
    >
      {fields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          rules={field.rules}
          colon={false}
          style={fieldVisibility(field?.type)}
        >
          {renderFormItem(field)}
        </Form.Item>
      ))}
    </Form>
  )
}

export default DynamicForm
