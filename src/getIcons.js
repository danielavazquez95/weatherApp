
 export const getIcons = (weatherState) => {
    
    switch (weatherState) {
        case 'Thunderstorm':
            return './icons/thunder.svg';
        case 'Drizzle':
            return './icons/rainy-4.svg';
        case 'Rain':
            return './icons/rainy-5.svg';
        case 'Snow':
            return './icons/snowy-4.svg';
        case 'Mist':
            return './icons/cloudy.svg';
        case 'Smoke':
            return'./icons/cloudy.svg';
        case 'Haze':
            return './icons/cloudy.svg';
        case 'Dust':
            return './icons/cloudy.svg';
        case 'Fog':
            return'./icons/cloudy.svg';
        case 'Sand':
            return './icons/cloudy.svg';
        case 'Ash':
            return './icons/cloudy.svg';
        case 'Squall':
            return './icons/cloudy.svg';
        case 'Tornado':
            return './icons/cloudy.svg';
        case 'Clear':
            return './icons/day.svg';
        case 'Clouds':
            return './icons/cloudy.svg';
        default:
            return;
    }


};