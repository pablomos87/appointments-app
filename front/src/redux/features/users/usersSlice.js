
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: false,
  user: {},
};

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.login = action.payload.login;
      state.user = action.payload.loginUser; //no sé si va el loginuser
    },
    logout: (state) => {
      state.login = false;
      state.user = {};
    },
  },
});

export const { setUserData, logout } = usersSlice.actions;

