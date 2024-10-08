'use client'
import { useState, useRef, useEffect } from 'react'
import { Form, message, Tooltip } from 'antd'
import { pathOr } from 'ramda'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import {
  fieldVisibility,
  renderFormItem,
  makeApiCall,
  redirectToURL,
  FormList,
  handleValues,
} from '@/utils/formUtils'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { InfoCircleOutlined } from '@ant-design/icons'
import { setSignoutDetails } from '@/store/userSlice'

const DynamicForm = ({ config, form, className = '' }) => {
  const userId = useSelector((state) => state?.user?.signinDetails?._id)
  const { formName, layout, fields, url, redirect } = config
  const router = useRouter()
  const dispatch = useDispatch()
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)
  const [loading, setLoading] = useState(false)
  const quillRefs = useRef([]) // Create a ref array to store multiple Quill editor refs

  useEffect(() => {
    quillRefs.current.forEach((quillRef) => {
      const quill = quillRef?.getEditor()
      if (quill) {
        quill.focus()
        quill.format('list', 'bullet') // Apply the bullet list format
      }
    })
  }, [])

  const onFinish = async (values) => {
    setLoading(true)
    const finalValues = handleValues(values, formName, userId)
    try {
      const response = await makeApiCall(url, finalValues)
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
      {fields.map((field, index) => {
        const { fieldEffects, dependsOn, ...props } = field
        if (fieldEffects) {
          fieldEffects(form)
        }
        if (field?.type === 'dynamicEditor') {
          return <FormList key={field?.name} field={field} />
        }
        if (field?.type === 'editor') {
          return (
            <div key={field?.name} className='full-width mb-2'>
              <h3 className='mb-1'>{field?.label}</h3>
              <Form.Item
                name={[field?.name, 'content']}
                rules={[
                  { required: true, message: 'Please input the content!' },
                ]}
                type={props?.type}
                className={props?.className}
              >
                <ReactQuill
                  ref={(el) => (quillRefs.current[index] = el)}
                  placeholder='Enter the content'
                  modules={props?.modules}
                  formats={props?.formats}
                />
              </Form.Item>
            </div>
          )
        }
        if (field?.name === 'role') {
          return (
            <Form.Item
              key={field?.name}
              colon={false}
              style={fieldVisibility(field?.type)}
              {...props}
            >
              {renderFormItem(
                {
                  ...props,
                  onChange: handleOnChange(field),
                },
                loading,
                form
              )}
            </Form.Item>
          )
        }

        if (dependsOn && !showAdditionalFields && dependsOn === 'institute') {
          return null
        }

        if (field?.type === 'upload') {
          return (
            <Form.Item
              key={field?.name}
              colon={false}
              style={fieldVisibility(field?.type)}
              {...props}
            >
              {renderFormItem(
                {
                  ...props,
                  onChange: handleOnChange(field),
                },
                loading,
                form
              )}
            </Form.Item>
          )
        }

        return (
          <Form.Item
            key={field?.name}
            label={
              <span>
                {field?.label}
                {field?.text && (
                  <Tooltip title={field?.text}>
                    <InfoCircleOutlined style={{ marginLeft: 5 }} />
                  </Tooltip>
                )}
              </span>
            }
            name={field?.name}
            rules={field?.rules}
            colon={false}
            style={fieldVisibility(field?.type)}
            {...field}
          >
            {renderFormItem(field, loading, form)}
          </Form.Item>
        )
      })}
    </Form>
  )
}

export default DynamicForm
