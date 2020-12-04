import React, { useEffect } from 'react';
import { Nav } from './Nav';
import { WeatherCard } from './WeatherCard';
import { WeatherCardToday } from './WeatherCardToday';
import { useState } from "react";
import { parseData } from './utils';
import moment from 'moment';

export const App = () => {


  const [name, setName] = useState('Amsterdam');
  const location = name;
  const [weather, setWeather] = useState({});
  const [arrOriginal, setArrOriginal] = useState([]);
  const [loadingStatus, setLoadingStatus]= useState(true);
  const apiWeather = () => {
  
     const apiKey = '7e47ac9a5e54fab20902167c0058fbe1';
     const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;
     const weatherData = fetch(url)
                        .then(response => response.json())
                        .then(data => {
                          setArrOriginal(data.list);
                          setWeather(parseData(data));
                          setLoadingStatus(false);
                        });
    
  };
 
  useEffect(() => {
    
    apiWeather()
    
  }, [name]);
  const forecast = [];
  if(loadingStatus===false){
    const arr = arrOriginal
    for (let i = 1 ; i < 6; i++){
      forecast.push(arr.find(day => day.dt_txt.slice(0,10) === moment().add(i,'days').format('YYYY-MM-DD')))
    }
    console.log(forecast)
  }
  
  return (

    <div className="page-container">
     <Nav name={setName}/>
    <div className="container">
   
     <div className="row">
             <div className="col">
                 <div className=" d-flex flex-wrap justify-content-center">
                 <WeatherCardToday data={weather}/>

                 {forecast &&
                    forecast.map((day, i) => 
                      <WeatherCard data={forecast[i]} key={i}/>)
                 }
                 </div>
             </div>
     </div>
     
 
</div>

</div>
    
  )
}
