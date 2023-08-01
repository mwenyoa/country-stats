import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountry } from '../redux/services/api-service';

const useFetchCountry = (countryId) => {
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state.country);
  useEffect(() => {
    dispatch(fetchCountry(countryId));
  }, [countryId, dispatch]);

  return country;
};

export default useFetchCountry;
