import React, { Component } from 'react';
import Forecast from '../../components/Forecast/Forecast';

class Weather extends Component {
    render() {
        return (
            <div>
                <h2>Weather in Mangalore</h2>
                <div>
                    <Forecast />
                </div>
            </div>
        );
    }
}

export default Weather;

