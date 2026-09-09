
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries';
import type { CountryType } from './files/CountryType';

//step-1: create a promise to load data
const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;
}

function App() {

  return (
    <>
      <h2>Welcome to Countries Explorer!</h2>
      <Suspense fallback={<p>Nadir Loading ...</p>}>
        <Countries countriesPromise = {countriesPromise()} ></Countries>
      </Suspense>

    </>
  )
}

export default App



