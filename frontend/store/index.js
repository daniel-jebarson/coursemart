import { configureStore } from '@reduxjs/toolkit'

// Import your reducers here
import counterReducer from './counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add more reducers here
  },
})

export default store