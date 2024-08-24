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
          size='large'
        >
          Add component
        </Button>
        {fields.map(({ key, name }) => (
          <Editor
            className={field.className}
            key={key}
            name={name}
            remove={remove}
          />
        ))}
      </>
    )}
  </Form.List>
);

export const handleValues = (values, action) => {
  console.log(values, action, 'values');

  const socialProfiles = [
    { name: 'linkedIn', link: values.linkedin },
    { name: 'youtube', link: values.youtube },
    { name: 'facebook', link: values.fb },
    { name: 'twitter', link: values.twitter },
  ].filter(profile => profile.link); // Filters out profiles with undefined or empty links

  const baseData = {
    name: values.name,
    About: values.About,
    qualification: values.qualification,
    experience: values.experience,
    socialProfiles: socialProfiles,
  };

  switch(action) {
    case 'createFaculity':
      return baseData;
    // Add more cases here if needed
    default:
      return values; // or throw an error or return a default value
  }
};

