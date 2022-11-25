import { configureStore } from '@reduxjs/toolkit'
import UserData from './slices/UserData'

export default configureStore({
    reducer: {
        user:UserData
    },
  })