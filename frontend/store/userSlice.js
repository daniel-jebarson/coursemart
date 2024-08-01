import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  signupDetails: null,
  signinDetails: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSignupDetails: (state, action) => {
      state.signupDetails = action.payload
    },
    setSigninDetails: (state, action) => {
      state.isLoggedIn = true
      state.signinDetails = action.payload
    },
    setSignoutDetails: (state) => {
      state.isLoggedIn = false
      state.signinDetails = null
      state.signupDetails = null
    },
  },
})

export const { setSignupDetails, setSigninDetails, setSignoutDetails } =
  userSlice.actions

export default userSlice.reducer
