import { Form, Input, Button } from 'antd'

const DynamicForm = ({ config }) => {
  const { formName, layout, fields } = config
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const renderFormItem = {
    input: <Input />,
    password: <Input.Password />,
  }

  return (
    <Form
      form={form}
      name={formName}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
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
