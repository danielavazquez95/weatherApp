import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { getIcons } from './getIcons';
import { getMaxTemp, getMinTemp } from './utils';

export const WeatherCard = ({data, temp}) => {
    moment.locale('es');
    const minTempToday  = getMinTemp(temp); // Busco minimos y maximos de todas las instancias de datos recibidas (la API devuelve un pronostico c/ 3 horas).
    const maxTempToday  = getMaxTemp(temp);

    return (
       
            <div className="weather-card my-3 mx-2">
                <img  className="ico" src={getIcons(data.weather[0].main)} alt="Card" />
                <p> {moment(data.dt_txt.slice(0,10)).format('dddd')} </p>
                <span className="data1">Min: {minTempToday}° / Max: {maxTempToday}°</span>
                <span className="data2">Humedad {data.main.humidity}%</span>
                <span className="data3">Viento {data.wind.speed} m/s</span>
            </div>
       
    )
};
