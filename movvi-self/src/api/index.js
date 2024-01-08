import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUserSignUp = createAsyncThunk("user/signUp", async (req) => {
  const res = await axios.post("api/user/signUp", req);
  return res.data;
});

export const postUserSignIn = createAsyncThunk("user/signIn", async (req) => {
  const res = await axios.post("api/user/signIn", req);
  return res;
});
