import { createSlice } from "@reduxjs/toolkit";

const logged = createSlice({
  name: 'logged',
  initialState: false,
  reducers: {
    toggleState: (state, action) => action.payload
  }
})

export const { toggleState } = logged.actions
export default logged.reducer