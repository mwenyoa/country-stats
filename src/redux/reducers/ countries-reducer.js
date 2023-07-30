import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "../services/api-service";

const initialState = {
  countries: [],
  isLoaded: false,
  error: undefined,
};

const countriesSlice = createSlice({
  name: "Countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.isLoaded = true;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoaded = true;
      });
  },
});

export default countriesSlice.reducer;