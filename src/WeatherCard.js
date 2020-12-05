import React from 'react';
import { getIcons } from './getIcons';
import moment from 'moment';
import 'moment/locale/es';

export const WeatherCard = ({data, temp}) => {
    moment.locale('es');
    const today = temp[0];
    const minTempToday  = temp[0].main.temp_min;
    const todayLength = temp.length -1 ;
    const maxTempToday  = temp[todayLength].main.temp_max;

    return (
       
            <div className="weather-card my-3 mx-2">
                <img  className="ico" src={process.env.PUBLIC_URL + getIcons(data.weather[0].main)} alt="Card" />
               
                <p> {moment(data.dt_txt.slice(0,10)).format('dddd')} </p>
                <span className="data1">Min: {minTempToday}° / Max: {maxTempToday}°</span>
                <span className="data2">Humedad {data.main.humidity}%</span>
                <span className="data3">Viento {data.wind.speed} m/s</span>
            </div>
       
    )
};
