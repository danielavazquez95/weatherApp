import React, { useEffect } from 'react';
import { Nav } from './Nav';
import { WeatherCard } from './WeatherCard';
import { WeatherCardToday } from './WeatherCardToday';
import { useState } from "react";
import moment from 'moment';

export const App = () => {

  const [CityName, setCityName] = useState('Buenos Aires');
  const [arrOriginal, setArrOriginal] = useState([]);
  const [loadingStatus, setLoadingStatus]= useState(true);

  const apiWeather = () => {
      const apiKey = '7e47ac9a5e54fab20902167c0058fbe1';
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CityName}&appid=${apiKey}&units=metric`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setArrOriginal(data.list);
          setLoadingStatus(false);
        });
  };
 
  useEffect(() => {
    
    apiWeather()
    
  }, [CityName]);
  
  const forecast = []; // es utilizado para el map en el render (crea una posicion del array por cada dia del pronostico)
  const forecastData = []; // contiene los datos de los 5 dias siguientes.
  
  if(loadingStatus===false){
    const arr = arrOriginal; // copia del array obtenido de la consulta
    for (let i = 1 ; i < 6; i++){//itero sobre el array de datos sin obtener el primer dia (solo pronostico para los siguientes)
      forecast.push(arr.find(day => day.dt_txt.slice(0,10) === moment().add(i,'days').format('YYYY-MM-DD'))) // creo un array por cada dia
    }
    for (let i = 0 ; i < 6; i++){ // recorro el array para obtener los dias siguientes del pronostico
      forecastData.push(arr.filter(day => day.dt_txt.slice(0,10) === moment().add(i,'days').format('YYYY-MM-DD')))// agrega a forecastData todos los valores de cada dia en su posicion correspondiente
    }
  };
  forecastData.shift(); // remuevo el primer dia
  
  return (

    <div className="page-container">
      <Nav name={setCityName}/>
      <div className="container">
        <div className="row">
                <div className="col">
                    <div className=" d-flex flex-wrap justify-content-center">
                   {
                      !loadingStatus &&
                      (<>
                      <WeatherCardToday location={CityName}/> 
                      {forecast.map((day, i) => <WeatherCard data={forecast[i]} temp={forecastData[i]} key={i}/>)}
                      </>)
                    }
                    </div>
                </div>
        </div>
      </div>
  </div>
  )
};
