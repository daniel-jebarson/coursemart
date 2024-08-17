'use client'
import React from 'react'
import { Form, Input, Button } from 'antd'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Editor = ({ name, remove, className }) => {
  return (
    <div className={`${className} mb-2`}>
      <Form.Item
        label={`Title`}
        name={[name, 'title']}
        rules={[{ required: true, message: 'Please input the title!' }]}
      >
        <Input placeholder='Enter the title' />
      </Form.Item>
      <Form.Item
        label={`Content`}
        name={[name, 'content']}
        rules={[{ required: true, message: 'Please input the content!' }]}
      >
        <ReactQuill placeholder='Enter the content' />
      </Form.Item>
      {remove && <Button onClick={() => remove(name)}>Remove</Button>}
    </div>
  )
}

export default Editor
