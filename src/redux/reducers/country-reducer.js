import { createSlice } from "@reduxjs/toolkit";
import { fetchCountry } from "../services/api-service";

const initialState = {
  country: {},
  isLoaded: false,
  error: undefined,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.country = action.payload;
        state.isLoaded = true;
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoaded = true;
      });
  },
});

export default countrySlice.reducer;