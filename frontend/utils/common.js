import jwt from 'jsonwebtoken'

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
