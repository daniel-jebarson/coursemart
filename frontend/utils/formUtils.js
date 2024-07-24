import { Input, Button, Select, Radio, Checkbox, DatePicker } from 'antd'

export const fieldVisibility = (type) => {
  if (type === 'hidden') {
    return { display: 'none' }
  }
  return {}
}

export const formItemComponents = {
  input: <Input />,
  password: <Input.Password />,
  email: <Input type='email' />,
  number: <Input type='number' />,
  textarea: <Input.TextArea />,
  hidden: ({ initialValue }) => (
    <Input type='hidden' initialvalues={initialValue} />
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

export const getFullUrl = (path) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  return `${baseUrl}${path}`
}

export const renderFormItem = (field) => {
  const { type, options } = field
  const component = formItemComponents[type]

  if (typeof component === 'function') {
    return component(options)
  }

  return component
}
