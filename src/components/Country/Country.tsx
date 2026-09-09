import type { CountryType } from "../../files/CountryType"
import '../Country/Country.css'

export interface CountryProps {
    country: CountryType,
}

export default function Country({ country }: CountryProps) {
    
    return (
        <div className="country">
            <h4>{country.name.common}</h4>
            <img src={country.flags.flags.png} alt="" />
            <p>Capital: {country.capital.capital}</p>
            <p>Capital: {country.population.population}</p>
        </div>
    )
}