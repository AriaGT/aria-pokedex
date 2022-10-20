import { configureStore } from "@reduxjs/toolkit";
import userName from './slices/userName.slice'
import logged from './slices/logged.slice'

export default configureStore({
  reducer: {
    userName,
    logged
  }
})