import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, payload) {},
    logout(state) {},
  },
});

export const authActions = authSlice.actions;
export default authSlice;
