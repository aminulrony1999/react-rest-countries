import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Rcountries></Rcountries>
    </div>
  );
}
function Rcountries(){
  const [countries, setCountries] = useState([]);
  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div>
      <p>Total countries : {countries.length} </p>
      {
        countries.map(country => <Country name ={country.name.common}></Country>)
      }
    </div>
  )
}
function Country(props){
  return(
    <div style ={{backgroundColor: 'lightpink',padding : '15px', border : '3px solid maroon', margin : '15px',borderRadius: '200px'}}>
      {
        <h2>Name : {props.name}</h2>
      }
    </div>
  )
}
export default App;
