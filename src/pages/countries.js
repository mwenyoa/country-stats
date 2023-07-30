import React from "react";
import useFetchCountries from "../hooks/fetchCountries";
import { Link } from "react-router-dom";

const Countries = () => {
    const countries = useFetchCountries();
    console.log("Countries", countries);
    return(
        <section className="grid md:gap-10 my-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-slate-100 max-w-[90%] mx-auto">
             {countries?.map((country) => (
                <div className="country-card sm:mb-10 shadow-xl hover:shadow-2xl rounded">
                    <img src={country.flags.svg} alt={country.name.official}/>
                     <div className="coutry-details p-5 ">
                        <h4>Country: {country.name.official}</h4>
                         <h4>Capital: {country.capital}</h4>
                         <h4>Population : {country.population}</h4>
                         <h5 className="flex flex-end "><Link to={`countries/${country.cca2}`} className="shadow-2xl rounded-full bg-blue-200 px-4 py-2">View More</Link></h5>
                     </div>
                </div>
             ))}
        </section>
    )
}

export default Countries;