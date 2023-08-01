import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/services/api-service';

const useFetchCountries = () => {
  const dispatch = useDispatch();
  const { countries, isLoaded } = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [countries.length, dispatch]);

  return { countries, isLoaded };
};

export default useFetchCountries;
