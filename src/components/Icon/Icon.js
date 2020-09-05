import React from 'react';

import dayLogo from '../../assets/animated/day.svg';
import nightLogo from '../../assets/animated/night.svg';
import rainyLogo from '../../assets/animated/rainy-6.svg';
import cloudyLogo from '../../assets/animated/cloudy.svg';
import snowyLogo from '../../assets/animated/snowy-1.svg';

const Icon = (props) => {
    let image = null;
    switch (props.data) {
        case 'Day':
            image = <img src={dayLogo} alt="Sunny" />;
            break;
        case 'Night':
            image = <img src={nightLogo} alt="Night" />;
            break;
        case 'Rain':
            image = <img src={rainyLogo} alt="Rainy" />;
            break;
        case 'Clouds':
            image = <img src={cloudyLogo} alt="Cloudy" />;
            break;
        case 'Snow':
            image = <img src={snowyLogo} alt="Snowy" />;
            break;
        default: 
            image = <img src={dayLogo} alt="Sunny" />;
            break;
    }
    return (
        <div>
            {image}
        </div>
    );
    
}

export default Icon;