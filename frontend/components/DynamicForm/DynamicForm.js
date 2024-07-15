import { Form, Input, Button } from 'antd'

const DynamicForm = ({ config }) => {
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
