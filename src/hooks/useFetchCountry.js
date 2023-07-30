import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountry } from "../redux/services/api-service";

const  useFetchCountry = (countryId) => {
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state.country);

  useEffect(() => {
    if (country === undefined) {
      dispatch(fetchCountry(countryId));
    }
  }, [country, dispatch]);

  return country;
};

export default useFetchCountry;