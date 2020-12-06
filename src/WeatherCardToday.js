import React, { useEffect, useState } from 'react';
import {getIcons} from './getIcons';

export const WeatherCardToday = ({location}) => {
  
    const [todayWeather, setTodayWeather] = useState({});
    const [loadingStatus, setLoadingStatus]= useState(true);

    const getTodayWeather = () => { // Este llamado es necesario porque la api gratuita de OpenWeatherMap da pronostico de a 3 horas y pasadas las 21hs de cada dia no devuelve datos, para no tener problemas de estabilidad.
        const apiKey = '7e47ac9a5e54fab20902167c0058fbe1';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setTodayWeather(data);
            setLoadingStatus(false);
          });
    };

    useEffect(() => {
    
        getTodayWeather()
        
      }, [location]);

    return (
      <>
      { !loadingStatus && 
        <div className="weather-card-today my-3 mx-2">
            <img  className="ico1" src={getIcons(todayWeather.weather[0].main)} alt="Card" />
            <h1>{todayWeather.main.temp}°</h1>
            <p>{todayWeather.name}</p>
            <span className="data1"> Min: {todayWeather.main.temp_min}° / Max: {todayWeather.main.temp_max}°</span>
            <span className="data2">Humedad: {todayWeather.main.humidity} %</span>
            <span className="data3">Viento: {todayWeather.wind.speed} m/s</span>
        </div>
      }
      </>
    
    )
};
