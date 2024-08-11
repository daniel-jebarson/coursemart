'use client'
import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Editor = () => {
  const [fields, setFields] = useState([])

  const addFields = () => {
    setFields([...fields, { title: '', content: '' }])
  }

  const handleTitleChange = (index, value) => {
    const updatedFields = [...fields]
    updatedFields[index].title = value
    setFields(updatedFields)
  }

  const handleContentChange = (index, value) => {
    const updatedFields = [...fields]
    updatedFields[index].content = value
    setFields(updatedFields)
  }

  return (
    <>
      {fields.map((field, index) => (
        <div key={index}>
          <Form.Item label={`Title ${index + 1}`} name={`title${index}`}>
            <Input
              value={field.title}
              onChange={(e) => handleTitleChange(index, e.target.value)}
            />
          </Form.Item>
          <Form.Item label={`Content ${index + 1}`} name={`content${index}`}>
            <ReactQuill
              value={field.content}
              onChange={(value) => handleContentChange(index, value)}
            />
          </Form.Item>
        </div>
      ))}
      <Button type='dashed' onClick={addFields}>
        Add Title and Editor
      </Button>
    </>
  )
}

export default Editor
