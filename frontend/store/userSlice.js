import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signupData: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.signupData = action.payload
    },
  },
})

export const { setUserDetails } = userSlice.actions

export default userSlice.reducer
