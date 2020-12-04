import React from 'react';
import {getIcons} from './getIcons';


export const WeatherCardToday = ({data}) => {

    return (
        <div className="weather-card-today my-3 mx-2">
            <img  className="ico1" src={getIcons(data.main)} alt="Card" />
            <h1>{data.temp}°</h1>
            <p>{data.name}</p>
            <span className="data1"> Min: {data.temp_min}° / Max: {data.temp_max}°</span>
            <span className="data2">Humedad: {data.humidity} %</span>
            <span className="data3">Viento: {data.wind}</span>
        </div>
    
    )
};
