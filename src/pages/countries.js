import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import useFetchCountries from '../hooks/fetchCountries';
import { Loading } from '../components';

const Countries = () => {
  const { countries, isLoaded } = useFetchCountries();
  const mapped = countries?.map((country) => country.name.official);
  const filtered = mapped?.filter(
    (country, index) => mapped.indexOf(country) === index,
  );
  const sorted = filtered?.sort((a, b) => a.localeCompare(b));

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  const sortedData = sorted?.filter((co) => co.toLowerCase().includes(search.toLowerCase()));
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(search);

  const filterCountryOnChange = (e) => {
    const { value } = e.target;
    navigate(value ? `?search=${value}` : '');
    setSearchValue(value);
  };

  return (
    <>
      <div className="w-full mt-20">
        <form className="form">
          <input
            type="text"
            value={searchValue}
            placeholder="Search for a country"
            onChange={filterCountryOnChange}
            className="rounded-full border bg-white border-gray-300 text-slate-700 text-lg focus:ring-sky-600 focus:border-sky-600 block w-full pl-10 p-2.5 shadow-xl"
            required
          />
        </form>

      </div>
      <section className="home-section   h-full grid  gap-x-5 gap-y-10  xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-[90%] mx-auto">

        { sortedData && isLoaded ? sortedData?.map((country) => {
          const countryObj = countries.find((c) => c.name.official === country);
          if (!countryObj) return null;

          return (
            <div
              className="relative country-card xs:max-w-[98%] sm:max-w-[95%] mx-auto  h-full w-full rounded-xl"
              data-aos="zoom-in"
              data-aos-delay="300"
              key={countryObj.cca2}
            >
              <img
                src={
                  countryObj.flags.svg
                    ? countryObj.flags.svg
                    : countryObj.flags.png
                }
                alt={countryObj.name.official}
                className="h-64  max-w-[95%] my-4 min-w-[90%] mx-auto"
              />
              <div className="coutry-details p-5 leading-10 font-bold">
                <h4>
                  <span className="pr-2"> Country:</span>
                  <span>{countryObj.name.official}</span>
                </h4>
                <h4>
                  <span className="pr-2">Capital:</span>
                  <span>{countryObj.capital}</span>
                </h4>
                <h4>
                  <span className="pr-2">Population :</span>
                  <span>{countryObj.population}</span>
                </h4>
                <div className="details-btn">
                  <Link
                    to={`countries/${countryObj.cca2}`}
                    className="shadow-2xl rounded-full px-4 my-10"
                  >
                    <span>More</span>
                    <span>
                      <FaChevronRight className="right-arrow" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        }) : <Loading />}
      </section>
    </>
  );
};

export default Countries;
