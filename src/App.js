import './App.css';
import { useEffect, useState } from 'react';

const API_KEY = "55df7334f2464a840579ef9dbcf83faf"

function App() {

  const [value, setValue] = useState();

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Hargeisa&appid=55df7334f2464a840579ef9dbcf83faf`)
    .then((res) => res.json())
    .then((data) =>  {
      console.log(data)
      setValue(data)
    })
  }, [])



  return (
    <div className="App">
      {value !== undefined ? <p>{value.name}</p> : <p>Loading...</p> }
      <p>City: </p>
      <p>Sunrise: </p>
      <p>Sunset: </p>
      <p>Description: </p>
      <p>Humidity: </p>
      <p>Day: </p>
      <p>Date: </p>
    </div>
  );
}

export default App;
