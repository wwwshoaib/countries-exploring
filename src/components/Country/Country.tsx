
import { useState } from "react"
import type { CountryType } from "../../files/CountryType"
import '../Country/Country.css'

export interface CountryProps {
    country: CountryType,
    handleVisitedCountries: (country: CountryType) => void
}

export default function Country({ country, handleVisitedCountries }: CountryProps) {

    const [visited, setVisited] = useState<boolean>(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    }


    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>
            <h4>{country.name.common}</h4>
            <img src={country.flags.flags.png} alt="" />
            <p>Capital: {country.capital.capital}</p>
            <p>Capital: {country.population.population}</p>
            <button onClick={handleVisited} >{(visited) ? 'Visited' : 'Mark as visited'}</button>
        </div>
    )
}  