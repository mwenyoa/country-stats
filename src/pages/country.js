import { useParams } from "react-router-dom";
import useFetchCountry from "../hooks/useFetchCountry";

const Country = ()  => {
    const param = useParams();
    const countryId = param.id;
    const country = useFetchCountry(countryId);
 
         <section className="max-w-[75%] mx-auto shadow-2xl">
            <img src=""></img>
            {countryId }
         </section>
    )
}

export default Country;