import { configureStore } from '@reduxjs/toolkit'

// Import your reducers here
import counterReducer from './counterSlice'
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    // Add more reducers here
  },
})

export default store
