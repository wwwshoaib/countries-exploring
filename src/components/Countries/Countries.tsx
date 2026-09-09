import { use } from "react"
import type { CountryType } from "../../files/CountryType"

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {

    const countries = use(countriesPromise);
    console.log(countries);

    return (
        <>
            <h1>Countries in world</h1>
            <div>
                {
                    countries.map(country => <li>{country.name.common}</li>)
                }

            </div>
        </>
    )
}