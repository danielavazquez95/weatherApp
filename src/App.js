import React, { useEffect } from 'react';
import { Nav } from './Nav';
import { WeatherCard } from './WeatherCard';
import { WeatherCardToday } from './WeatherCardToday';
import { useState } from "react";
import { parseData } from './utils';
import moment from 'moment';

export const App = () => {

  const [name, setName] = useState('Buenos Aires');
  const location = name;
  const [weather, setWeather] = useState({});
  const [arrOriginal, setArrOriginal] = useState([]);
  const [loadingStatus, setLoadingStatus]= useState(true);

  const apiWeather = () => {
      const apiKey = '7e47ac9a5e54fab20902167c0058fbe1';
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;
      fetch(url)
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
  const minMaxTemps = [];
  
  if(loadingStatus===false){
    const arr = arrOriginal; // copia del array obtenido de la consulta
    for (let i = 1 ; i < 6; i++){//itero sobre el array de datos sin obtener el primer dia (solo pronostico para los siguientes)
      forecast.push(arr.find(day => day.dt_txt.slice(0,10) === moment().add(i,'days').format('YYYY-MM-DD'))) // creo un array por cada dia
    }
    minMaxTemps.push(arr.filter(day => day.dt_txt.slice(0,10) === moment().format('YYYY-MM-DD'))); // Obtengo todos los datos para ese dia
    for (let i = 0 ; i < 6; i++){ // recorro el array para obtener los dias siguientes del pronostico
      minMaxTemps.push(arr.filter(day => day.dt_txt.slice(0,10) === moment().add(i,'days').format('YYYY-MM-DD')))// agrega a MinMaxtemps todos los valores de cada dia en su posicion correspondiente
    }
  };
  const todayMinMax = minMaxTemps.splice(0,1);// obtengo las temperaturas del dia de hoy para WeatherCardToday
  minMaxTemps.shift(); // remuevo el primer dia
  
  return (

    <div className="page-container">
      <Nav name={setName}/>
      <div className="container">
        <div className="row">
                <div className="col">
                    <div className=" d-flex flex-wrap justify-content-center">
                   {
                      !loadingStatus &&
                      (<>
                      <WeatherCardToday data={weather} temp={todayMinMax}/> 
                      {forecast.map((day, i) => <WeatherCard data={forecast[i]} temp={minMaxTemps[i]} key={i}/>)}
                      </>)
                    }
                    </div>
                </div>
        </div>
      </div>
  </div>
  )
};
