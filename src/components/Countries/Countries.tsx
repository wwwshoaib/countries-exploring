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

        const isVisited = visitedCountries.some(c => c.ccn3.ccn3 === country.ccn3.ccn3);
        //good practice to use the unique identifier of the country to check if it is already visited or not. In this case, we are using the ccn3 property of the country object as the unique identifier.
        if (isVisited) {
            const remainingCountries = visitedCountries.filter(c => c.ccn3.ccn3 !== country.ccn3.ccn3);
            setVisitedCountries(remainingCountries);
        }
        // Bad practice to use the object reference to check if it is already visited or not. In this case, we are using the country object reference to check if it is already visited or not. This will not work as expected because the country object reference will be different for each country even if they have the same data.
        // if (visitedCountries.includes(country)) {
        //     const remainingCountries = visitedCountries.filter(c => c !== country);
        //     setVisitedCountries(remainingCountries);
        // }
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
                        //use the unique identifier of the country to set the key prop. In this case, we are using the ccn3 property of the country object as the unique identifier.
                            key={country.ccn3.ccn3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries} >

                        </Country>)
                }

            </div>
        </>
    )
}