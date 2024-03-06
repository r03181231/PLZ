import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sampleState: "sample",
};

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    setSample: (state, action) => {
      const samplePayload = action.payload;
      state.sampleState = samplePayload;
    },
  },
});
export const { setSample } = sampleSlice.actions;
export default sampleSlice.reducer;
