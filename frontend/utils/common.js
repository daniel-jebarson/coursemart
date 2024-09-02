import jwt from 'jsonwebtoken'
import AWS from 'aws-sdk'

export const requiredLabel = (label) => (
  <span>
    {label} <span style={{ color: 'red' }}>*</span>
  </span>
)

// utils/authUtils.js
export const verifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (error) {
    return false
  }
}

// saving redux to local storage and reading it from local storage on page refresh

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('reduxState', serializedState)
  } catch (e) {
    console.error('Could not save state', e)
  }
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    console.error('Could not load state', e)
    return undefined
  }
}

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
})

const s3 = new AWS.S3()

export const uploadToS3 = async (file) => {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
    Key: `${Date.now()}-${file.name}`, // unique key name
    Body: file,
    ContentType: file.type,
    ACL: 'public-read',
  }

  const data = await s3.upload(params).promise()
  return data.Location // this is the URL of the uploaded file
}
