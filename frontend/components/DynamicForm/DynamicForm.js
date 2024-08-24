'use client'
import { useState } from 'react'
import { Form, message, Tooltip } from 'antd'
import { pathOr } from 'ramda'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import {
  fieldVisibility,
  renderFormItem,
  makeApiCall,
  redirectToURL,
  FormList,
} from '@/utils/formUtils'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { InfoCircleOutlined } from '@ant-design/icons'
import { setSignoutDetails } from '@/store/userSlice'

const DynamicForm = ({ config, form, className = '' }) => {
  const { formName, layout, fields, url, redirect } = config
  const router = useRouter()
  const dispatch = useDispatch()
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      const response = await makeApiCall(url, values)
      const data = pathOr(null, ['data'], response)
      redirectToURL(data, formName, dispatch, router, redirect)
    } catch (error) {
      const errorMsg = pathOr(
        'Something failed, please check console',
        ['response', 'data', 'msg'],
        error
      )
      message.error(errorMsg)
      console.error(error)
      if (error.response.status === 401) {
        dispatch(setSignoutDetails())
      }
    } finally {
      setLoading(false) // Stop loading
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleOnChange = (field) => (e) => {
    if (field.onChange) {
      field.onChange(e, form)
    }
    if (field.name === 'role') {
      setShowAdditionalFields(e.target.value === 'institute')
    }
  }

  return (
    <Form
      form={form}
      name={formName}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
      layout={layout}
      scrollToFirstError
      className={className}
    >
      {fields.map((field) => {
        const {
          fieldEffects,
          dependsOn,
          name,
          rules,
          type,
          label,
          text,
          ...props
        } = field
        if (fieldEffects) {
          fieldEffects(form)
        }
        if (type === 'list') {
          return <FormList key={name} field={field} />
        }
        if (type === 'editor') {
          return (
            <div className='full-width mb-2'>
              <h3 className='mb-1'>{label}</h3>
              <Form.Item
                name={[name, 'content']}
                rules={[
                  { required: true, message: 'Please input the content!' },
                ]}
              >
                <ReactQuill placeholder='Enter the content' />
              </Form.Item>
            </div>
          )
        }
        if (name === 'role') {
          return (
            <Form.Item
              key={name}
              colon={false}
              style={fieldVisibility(field?.type)}
              {...props}
            >
              {renderFormItem({ ...props, onChange: handleOnChange(field) })}
            </Form.Item>
          )
        }

        if (dependsOn && !showAdditionalFields && dependsOn === 'institute') {
          return null
        }

        return (
          <Form.Item
            key={name}
            label={
              <span>
                {label}
                {text && (
                  <Tooltip title={text}>
                    <InfoCircleOutlined style={{ marginLeft: 5 }} />
                  </Tooltip>
                )}
              </span>
            }
            name={name}
            rules={rules}
            colon={false}
            style={fieldVisibility(field?.type)}
            {...field}
          >
            {renderFormItem(field, loading)}
          </Form.Item>
        )
      })}
    </Form>
  )
}

export default DynamicForm
