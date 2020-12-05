import React from 'react';
import {getIcons} from './getIcons';


export const WeatherCardToday = ({data,temp}) => {
    const today = temp[0];
    const minTempToday  = today[0].main.temp_min;
    const todayLength = today.length -1 ;
    const maxTempToday  = today[todayLength].main.temp_max;

    return (
        <div className="weather-card-today my-3 mx-2">
            <img  className="ico1" src={process.env.PUBLIC_URL + getIcons(data.main)} alt="Card" />
            <h1>{data.temp}°</h1>
            <p>{data.name}</p>
            <span className="data1"> Min: {minTempToday}° / Max: {maxTempToday}°</span>
            <span className="data2">Humedad: {data.humidity} %</span>
            <span className="data3">Viento: {data.wind}</span>
        </div>
    
    )
};
