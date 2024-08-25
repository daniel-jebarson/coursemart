import axios from 'axios'
import { Input, Button, Select, Radio, Checkbox, DatePicker, Form } from 'antd'
import { Editor } from '@/components/index'
import { setSignupDetails, setSigninDetails } from '@/store/userSlice'
import { pathOr } from 'ramda'
import { ClientPageRoot } from 'next/dist/client/components/client-page'

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
      size={props?.size}
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
  console.log(type)
  const component = formItemComponents[type]
  return component(field, loading)
}

export const makeApiCall = async (url, values) => {
  const state = JSON.parse(localStorage.getItem('reduxState'))
  const token = pathOr(null, ['user', 'signinDetails', 'token'], state)
  try {
    const response = await axios.post(getFullUrl(url), values, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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
  <Form.List
    key={field.name}
    name={field.name}
    initialValue={[{ title: '', content: '' }]}
  >
    {(fields, { add, remove }) => (
      <>
        <Button
          type='primary'
          onClick={() => add()}
          style={{
            alignSelf: 'center',
            marginLeft: 'auto',
          }}
          size='large'
        >
          Add component
        </Button>
        {fields.map(({ key, name }, index) => (
          <Editor
            className={field.className}
            key={key}
            name={name}
            remove={remove}
            canRemove={index > 0}
          />
        ))}
      </>
    )}
  </Form.List>
)

export const handleValues = (values, action, userId) => {
  const { linkedin, youtube, fb, twitter, ...createFacultyDetails } = values

  const createFaculty = {
    socialProfile: [linkedin ? {'name': 'Linkedin', link : linkedin} : null,
      youtube ? {'name': 'youtube', link : youtube} : null,
      fb ? {'name': 'facebook', link : fb} : null,
      twitter ?{'name': 'twitter', link : twitter}: null],
      'InstituteId':userId,
    ...createFacultyDetails,
  }

  const valuesMap = {
    createFaculty,
  }

  return valuesMap[action] || values
}


export const makeGetCall = async (url) => {
  const state = JSON.parse(localStorage.getItem('reduxState'))
  const token = pathOr(null, ['user', 'signinDetails', 'token'], state)
  try {
    const response = await axios.get(getFullUrl(url), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    throw error
  }
}

export const makeDeleteCall = async (url) => {
  const state = JSON.parse(localStorage.getItem('reduxState'))
  const token = pathOr(null, ['user', 'signinDetails', 'token'], state)
  try {
    const response = await axios.delete(getFullUrl(url), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    throw error
  }
}