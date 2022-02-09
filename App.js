import React, {useState, useEffect} from 'react'
import "./App.css"


function App() {

  const [weatherData, setWeatherData] = useState([{}]);  
  const apiKey = "ef5d45427f8ce5a5f51750b197a8fe8d";
  const [city, setCity] = useState("");
  
  //get weather from api function
  const getWeather =(event)=>{
    if(event.key=="Enter"){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`).then(
        response => response.json()).then(
          data =>{
            setWeatherData(data);
            setCity("");
          }
        )    
    }
  }

  //add to input form now set properties
  //onchange sets city variable to what we put in on the target which is the input form
  //binds city variable to input
  //keypress uses the getweather function
  return (
    <div className="container">
     <input
      className="input"
      placeholder="Enter City..."
      onChange={e=>setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather} 
      />
      {typeof weatherData.main === "undefined"?(
        <p>Welcome to weather app! Enter in a city to get the weather of.</p>
      ):(
        <div className="weather-data">
        <p className="city">{weatherData.name}</p>
        <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
        <p className="weather">{weatherData.weather[0].main}</p>

        </div>
      )}
    
      {weatherData.cod =="404"?(
        <p>City not found.</p>
      ): (<>

      </>
      )}
    </div>
  )
}

export default App
