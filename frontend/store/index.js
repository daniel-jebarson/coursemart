import { configureStore } from '@reduxjs/toolkit'
import { saveState, loadState } from '@/utils/common'
// Import your reducers here
import counterReducer from './counterSlice'
import userReducer from './userSlice'

// Load the state from local storage
const persistedState = loadState()

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    // Add more reducers here
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Subscribe to store updates and save the state to local storage
store.subscribe(() => {
  saveState(store.getState())
})

export default store
