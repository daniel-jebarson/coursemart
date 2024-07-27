import { Input, Button, Select, Radio, Checkbox, DatePicker } from 'antd'
import axios from 'axios'

export const fieldVisibility = (type) => {
  if (type === 'hidden') {
    return { display: 'none' }
  }
  return {}
}

export const formItemComponents = {
  input: (props) => <Input {...props} />,
  password: (props) => <Input.Password {...props} />,
  email: (props) => <Input type='email' {...props} />,
  number: (props) => <Input type='number' {...props} />,
  textarea: (props) => <Input.TextArea {...props} />,
  hidden: ({ initialValue }) => (
    <Input type='hidden' initialvalues={initialValue} />
  ),
  select: (props) => (
    <Select {...props}>
      {props?.options?.map((prop) => (
        <Select.Option key={prop.value} value={prop.value}>
          {prop.label}
        </Select.Option>
      ))}
    </Select>
  ),
  radio: (props) => (
    <Radio.Group {...props}>
      {props?.options?.map((prop) => (
        <Radio key={prop.value} value={prop.value}>
          {prop.label}
        </Radio>
      ))}
    </Radio.Group>
  ),
  checkbox: (props) => (
    <Checkbox.Group {...props}>
      {props?.options?.map((prop) => (
        <Checkbox key={prop.value} value={prop.value}>
          {prop.label}
        </Checkbox>
      ))}
    </Checkbox.Group>
  ),
  date: (props) => <DatePicker {...props} />,
  button: (props) => (
    <Button type={props?.options?.type} htmlType={props?.options?.htmlType} className={props?.options.className}>
      {props?.options?.label}
    </Button>
  ),
}

export const getFullUrl = (path) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  return `${baseUrl}${path}`
}

export const renderFormItem = (field) => {
  const { type, options, onChange } = field
  const component = formItemComponents[type]
  return component({ options, onChange })
}

export const makeAPiCall = async (url, values) => {
  try {
    const response = await axios.post(getFullUrl(url), values, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response
  } catch (error) {
    throw error
  }
}
