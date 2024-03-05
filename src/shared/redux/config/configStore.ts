import { configureStore } from "@reduxjs/toolkit";
import sample from "../modules/sampleSlice";

const store = configureStore({
  reducer: {
    sample,
  },
});

export default store;
