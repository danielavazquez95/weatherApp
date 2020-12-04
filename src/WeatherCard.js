import React from 'react';
import { getIcons } from './getIcons';
import moment from 'moment';
import 'moment/locale/es';

export const WeatherCard = ({data}) => {

    moment.locale('es');

    return (
       
            <div className="weather-card my-3 mx-2">
                <img  className="ico" src={getIcons(data.weather[0].main)} alt="Card" />
               
                <p> {moment(data.dt_txt.slice(0,10)).format('dddd')} </p>
                <span className="data1">Min: {data.main.temp_min}° / Max: {data.main.temp_max}°</span>
                <span className="data2">Humedad {data.main.humidity}%</span>
                <span className="data3">Viento {data.wind.speed} m/s</span>
            </div>
       
    )
};
