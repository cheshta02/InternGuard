import { configureStore } from "@reduxjs/toolkit";
import opportunityReducer from "./opportunitySlice";

export const store = configureStore({
  reducer: {
    opportunities: opportunityReducer,
  },
});