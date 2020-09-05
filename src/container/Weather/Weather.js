import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Forecast from '../../components/Forecast/Forecast';

class Weather extends Component {
    render() {
        return (
            <div>
                <h2>Weather in Mangalore</h2>
                <Switch>
                    <Route path="/" component={Forecast} />
                </Switch>
            </div>
        );
    }
}

export default Weather;

