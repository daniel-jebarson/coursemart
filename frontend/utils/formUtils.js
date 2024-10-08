import axios from 'axios'
import { Input, Button, Select, Radio, Checkbox, DatePicker, Form } from 'antd'
import { Editor, UploadImage } from '@/components/index'
import { setSignupDetails, setSigninDetails } from '@/store/userSlice'
import { pathOr } from 'ramda'

const getState = () => JSON.parse(localStorage.getItem('reduxState'))

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
    <Select
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      showSearch
      mode={props?.mode || 'single'}
      {...props}
    >
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
  upload: (props, loading, form) => <UploadImage {...props} form={form} />,
}

export const getFullUrl = (path) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  return `${baseUrl}${path}`
}

export const renderFormItem = (field, loading = false, form) => {
  const { type } = field
  const component = formItemComponents[type]
  return component(field, loading, form)
}

export const makeApiCall = async (url, values) => {
  const state = getState()
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
    createCourse: () => {
      // form?.setFieldValue('courseImage', newActiveBanks)
    },
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
    socialProfile: [
      linkedin ? { name: 'Linkedin', link: linkedin } : null,
      youtube ? { name: 'youtube', link: youtube } : null,
      fb ? { name: 'facebook', link: fb } : null,
      twitter ? { name: 'twitter', link: twitter } : null,
    ],
    InstituteId: userId,
    ...createFacultyDetails,
  }

  const valuesMap = {
    createFaculty: () => createFaculty,
    createCourse: () => {
      const state = getState()
      const instituteId = pathOr(null, ['user', 'signinDetails', '_id'], state)
      return {
        ...values,
        InstituteId: instituteId,
      }
    },
  }

  return valuesMap[action]() || values
}

export const makeGetCall = async (url) => {
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
