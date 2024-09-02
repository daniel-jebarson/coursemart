'use client'
import { useState } from 'react'
import { Upload, Button, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { uploadToS3 } from '@/utils/common' // Your utility function

const UploadImage = ({ form }) => {
  const [imageUrl, setImageUrl] = useState(null)
  const [fileList, setFileList] = useState([])
  const [uploading, setUploading] = useState(false)

  const handleUpload = async () => {
    if (fileList.length === 0) return

    setUploading(true)
    try {
      // Use either originFileObj (preferred) or fallback to the file object itself
      const file = fileList[0].originFileObj || fileList[0]
      const url = await uploadToS3(file)
      setImageUrl(url)
      message.success('Image uploaded successfully!')

      // Ensure the form value is set
      if (form && form.setFieldValue) {
        form.setFieldValue('courseImage', url)
      } else {
        console.error(
          'Form is not provided or does not have setFieldValue method'
        )
      }

      // Clear file list after successful upload
      setFileList([])
    } catch (error) {
      message.error('Image upload failed.')
      console.error('Upload Error:', error)
    } finally {
      setUploading(false)
    }
  }

  const props = {
    onRemove: (file) => {
      const newFileList = fileList.filter((item) => item.uid !== file.uid)
      setFileList(newFileList)
    },
    beforeUpload: (file) => {
      setFileList([file]) // Limit to one file at a time
      return false // Prevent automatic upload by Ant Design
    },
    fileList,
    customRequest: ({ onSuccess }) => {
      onSuccess('ok')
    },
  }

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type='primary'
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
      {imageUrl && (
        <div style={{ marginTop: 16 }}>
          <img
            src={imageUrl}
            alt='Uploaded Image'
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        </div>
      )}
    </>
  )
}

export default UploadImage
