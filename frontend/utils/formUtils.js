import axios from 'axios'
import { Input, Button, Select, Radio, Checkbox, DatePicker, Form } from 'antd'
import { Editor } from '@/components/index'
import { setSignupDetails, setSigninDetails } from '@/store/userSlice'

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
  button: (props, loading) => (
    <Button
      type={props?.options?.type}
      htmlType={props?.options?.htmlType}
      className={props?.options.className}
      loading={loading}
    >
      {props?.options?.label}
    </Button>
  ),
}

export const getFullUrl = (path) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  return `${baseUrl}${path}`
}

export const renderFormItem = (field, loading = false) => {
  const { type } = field
  const component = formItemComponents[type]
  return component(field, loading)
}

export const makeApiCall = async (url, values) => {
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

export const redirectToURL = (data, formName, dispatch, router, redirect) => {
  const url = {
    signup: () => {
      dispatch(setSignupDetails(data))
      router.push(redirect)
    },
    signin: () => {
      dispatch(setSigninDetails(data))
      document.cookie = `token=${data.token}; path=/`
      if (data?.role === 'institute') {
        router.push('/dashboard')
      } else {
        router.push(redirect)
      }
    },
    verifyEmail: () => {},
  }

  if (url[formName]) {
    return url[formName]()
  } else {
    router.push(`/${formName}`)
  }
}

export const FormList = ({ field }) => (
  <Form.List key={field.name} name={field.name}>
    {(fields, { add, remove }) => (
      <>
        <Button
          type='primary'
          onClick={() => add()}
          style={{
            alignSelf: 'center',
            marginLeft: 'auto',
          }}
        >
          Add Title and Content
        </Button>
        {fields.map(({ key, name, ...restField }) => (
          <div className={field.className} key={key}>
            <Editor />
            <Button onClick={() => remove(name)}>Remove</Button>
          </div>
        ))}
      </>
    )}
  </Form.List>
)
