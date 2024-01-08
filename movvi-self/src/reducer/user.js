import { createSlice } from "@reduxjs/toolkit";
import { postUserSignIn, postUserSignUp } from "../api";

const initialState = {
  value: 0,
  isSignUpStatus: null,
  userName: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postUserSignUp.fulfilled, (state, action) => {
      state.isSignUpStatus = true;
    });
    builder.addCase(postUserSignIn.fulfilled, (state, action) => {
      state.userName = action.payload;
    });
  },
});

export const { getValue } = userSlice.actions;
