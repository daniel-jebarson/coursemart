import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
      state.signinDetails = action.payload
    },
  },
})

export const { setSignupDetails, setSigninDetails } = userSlice.actions

export default userSlice.reducer
