import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./reducers/ countries-reducer";
import countrySlice from "./reducers/country-reducer";

const store = configureStore({
  reducer: {
    countries: countriesSlice,
    country: countrySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

console.log(store.getState());

export default store;
