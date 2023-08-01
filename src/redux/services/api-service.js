import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://restcountries.com/v3.1';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    try {
      const res = await axios.get(`${baseURL}/all`);
      const data = await res.data;
      return data;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  },
);

export const fetchCountry = createAsyncThunk(
  'countries/fetchCountry',
  async (countryId) => {
    try {
      const res = await axios.get(`${baseURL}/alpha/${countryId}`);
      const data = await res.data;
      return data;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  },
);
