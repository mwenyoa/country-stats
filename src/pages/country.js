import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchCountry from '../hooks/useFetchCountry';
import 'aos/dist/aos.css';

const Country = () => {
  const param = useParams();
  const country = useFetchCountry(param.id);
  const {
    flags,
    name,
    population,
    timezones,
    area,
    unMember,
    borders,
    capital,
    landlocked,
    latlng,
    region,
    subregion,
    startOfWeek,
  } = country;

  return (
    <section
      data-aos="zoom-in"
      className="relative details-page min-w-[75%] h-full xs:mt-48 sm:mt-40 md:mt-40  flex flex-col items-center mx-auto md:max-w-[80%] lg:max-w-[75%] xl:max-w-[75%] rounded-xl country-details"
    >
      <div className="relative md:flex py-20 h-full md:justify-between  md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] mx-auto  px-2">
        <img
          src={flags?.svg}
          alt={flags?.alt}
          className="details-img mx-auto xs:max-w-[95%] sm:max-w-[90%] sm:mx-auto md:max-w-[50%] lg:max-w-[50%] xl:max-w-[50%]  px-5"
        />
        <div className="country-details xs:text-xs  sm:text-sm md:text-lg  lg:text-lg xl:text-lg flex w-full xs:max-w-[95%] sm:max-w-[90%] sm:mx-auto md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%]  mx-auto  flex-col justify-between px-5 leading-10">
          <h1 className="flex flex-wrap text-center w-full xs:text-2xl  sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl country-title">
            {name?.official}
          </h1>
          <h2 className="flex justify-between">
            <span>Capital: </span>
            <span className="text-sky-600">{capital}</span>
          </h2>
          <h2 className="flex justify-between">
            <span>population: </span>
            <span className="text-sky-600">{population}</span>
          </h2>
          <h2 className="flex justify-between">
            <span>Region: </span>
            <span className="text-sky-600">{region}</span>
          </h2>
          <h2 className="flex justify-between">
            <span>Sub Region: </span>
            <span className="text-sky-600">{subregion}</span>
          </h2>
          <h2 className="flex justify-between">
            <span>Area: </span>
            <span className="text-sky-600">{area}</span>
          </h2>
          <h2 className="flex justify-between">
            <span>UN Member </span>
            <span className="text-sky-600">{unMember ? 'Yes' : 'No'}</span>
          </h2>
          <h2 className="flex justify-between">
            <span>Land Locked: </span>
            <span className="text-sky-600">{landlocked ? 'Yes' : 'No'}</span>
          </h2>
          <h2 className="flex justify-between">
            <span>Co-ordinates: </span>
            <span className="text-sky-600">
              {' '}
              {latlng?.join(' , ')}
            </span>
          </h2>
          <h2 className="flex justify-between">
            <span>Time Zone: </span>
            <span className="text-sky-600">{timezones?.[0]}</span>
          </h2>
          <h2 className="flex justify-between">
            <span>Borders: </span>
            <span className="flex flex-flow px-2 text-sky-600">
              {borders?.join(' , ')}
            </span>
          </h2>
          <h2 className="flex justify-between">
            <span>Week Starts On: </span>
            <span className="text-sky-600">{startOfWeek}</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Country;
