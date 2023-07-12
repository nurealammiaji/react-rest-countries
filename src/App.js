import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  console.log(countries);
  return (
    <div>
      <h2>All Countries Information</h2>
      <p>Available Countries: {countries.length}</p>
      <div className='country-div'>
        {countries.map(country => <DisplayCountries
        flag={country.flags.png} name={country.name} population={country.population}></DisplayCountries>)}
      </div>
    </div>
  )
}

function DisplayCountries(props) {
  console.log(props)
  return (
    <div className='country-card'>
      <ul>
        <li><img src={props.flag} alt="" /></li>
        <li><h2>{props.name.common}</h2></li>
        <li><strong>Official Name:</strong> {props.name.official}</li>
        <li><strong>Population:</strong> {props.population}</li>
      </ul>
  </div>
  )
}

export default App;
