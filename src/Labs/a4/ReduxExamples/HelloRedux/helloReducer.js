import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  message: "Hello World!!!!!!",
};

const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = helloSlice.actions;
export default helloSlice.reducer;