import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://restcountries.com/v3.1/all";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    try {
      const res = await axios.get(baseURL);
      const data = await res.data;
      console.log("Data", data);
      return data;
    } catch (err) {
        console.log(err)
      throw new Error(err.response.data.message);
    }
  }
);

export const fetchCountry = createAsyncThunk(
  "countries/fetchCountry",
  async (countryId) => {
    try {
      const res = await axios.get(`${baseURL}/cca2/${countryId}`);
      const data = await res.data;
      console.log("country Data: ",data);
      return data; 
    } catch (err) {
      console.log("country fetch error: ", err)
      throw new Error(err.response.data.message);
    }
  }
);
