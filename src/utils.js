

export  const parseData = (weather_data) => {
   
   const name = weather_data.city.name;
   const {humidity, temp, temp_min, temp_max} = weather_data.list[0].main;
   const {main} = weather_data.list[0].weather[0];
   const {speed} = weather_data.list[0].wind;
   
   const data = { 
      name,
      humidity,
      temp,
      temp_max,
      temp_min,
      main,
      wind: `${speed} m/s`
   }
 
   return data;
 
};