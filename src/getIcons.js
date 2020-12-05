
 export const getIcons = (weatherState) => {
    
    switch (weatherState) {
        case 'Thunderstorm':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/thunder.svg';
        case 'Drizzle':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/rainy-4.svg';
        case 'Rain':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/rainy-5.svg';
        case 'Snow':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/4d4f57868caec5d58f03628fafddf7e223835c1f/public/assets/snowy-4.svg';
        case 'Mist':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/cloudy.svg';
        case 'Smoke':
            return'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/cloudy.svg';
        case 'Haze':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/cloudy.svg';
        case 'Dust':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/cloudy.svg';
        case 'Fog':
            return'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/cloudy.svg';
        case 'Sand':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/cloudy.svg';
        case 'Ash':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/cloudy.svg';
        case 'Squall':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/cloudy.svg';
        case 'Tornado':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/876b315a5e08da1b587de87455ded2f786bb7dd0/public/assets/cloudy.svg';
        case 'Clear':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/4d4f57868caec5d58f03628fafddf7e223835c1f/public/assets/day.svg';
        case 'Clouds':
            return 'https://raw.githubusercontent.com/danielavazquez95/weatherApp/4d4f57868caec5d58f03628fafddf7e223835c1f/public/assets/cloudy.svg';
        default:
            return;
    }

};