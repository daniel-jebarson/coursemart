import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signupFormData: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.signupFormData = action.payload
    },
  },
})

export const { setUserDetails } = userSlice.actions

export default userSlice.reducer
