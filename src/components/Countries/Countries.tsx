import { use, useState } from "react"
import type { CountryType } from "../../files/CountryType"
import '../Countries/Countris.css'
import Country from "../Country/Country";

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    //load the countries data from the promise using the use hook
    const countries = use(countriesPromise);
    //create a state to store the visited countries
    const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);

    const handleVisitedCountries = (country: CountryType): void => {
        if (visitedCountries.includes(country)) {
            const remainingCountries = visitedCountries.filter(c => c !== country);
            setVisitedCountries(remainingCountries);

        }
        else {
            const newVisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountries);
        }
    }



    return (
        <>
            <h1>Countries in world</h1>
            <h2>Visited Countries: {visitedCountries.length}</h2>
            <div className="countries">
                {
                    countries.map(country =>
                        <Country
                            key={country.ccn3.ccn3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries} >

                        </Country>)
                }

            </div>
        </>
    )
}