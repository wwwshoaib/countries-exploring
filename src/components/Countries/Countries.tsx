import { use } from "react"
import type { CountryType } from "../../files/CountryType"
import '../Countries/Countris.css'
import Country from "../Country/Country";

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {

    const countries = use(countriesPromise);
    

    return (
        <>
            <h1>Countries in world</h1>
            <div className="countries">
                {
                    countries.map(country => <Country key = {country.ccn3.ccn3} country = {country} ></Country>)
                }

            </div>
        </>
    )
}