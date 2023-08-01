/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';
import { fetchCountry } from '../services/api-service';

const initialState = {
  country: {},
  isLoaded: 'idle',
  error: undefined,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => {
        state.isLoaded = 'pending';
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.country = action.payload[0];
        state.isLoaded = 'loaded';
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoaded = 'loaded';
      });
  },
});

export default countrySlice.reducer;
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
