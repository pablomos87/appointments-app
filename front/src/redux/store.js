import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./features/users/usersApi";
import { usersSlice } from "./features/users/usersSlice";
import { appointmentsApi } from "./features/appointments/appointmentsApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [appointmentsApi.reducerPath]: appointmentsApi.reducer,
    usersSlice: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      appointmentsApi.middleware
    ),
});