import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Stack from '../Stack/Stack';
import './Forecast.css';

class Forecast extends Component {
    state = {
        dailyForecastData: [],
        hourlyForecastData: [],
        isClicked: false,
        searchKey: null,
        forecastDataDisplay: [],
    }

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?lat=12.9141&lon=74.8560&units=metric&appid=9ab4481d0787a1095ae94f2695742c57')
            .then(response => {
                const dailyData = response.data.list.filter(filteredData => filteredData.dt_txt.includes('12:00:00'));
                const responsedata = response.data.list;
                const hourlyData = responsedata.map(receivedData => {
                    return {
                        ...receivedData
                    }
                })
                this.setState({
                    dailyForecastData: dailyData,
                    hourlyForecastData: hourlyData
                });
            }).catch(error => {
                console.log(error);
            })
    }

    dateFormat = (receivedDate) => {
        const days = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ];
        const dateTime = new Date(1970, 0, 1);
        dateTime.setSeconds(receivedDate);
        const day = days[dateTime.getDay()];
        return day;
    }

    hourlyDataDisplay = (searchKey) => {
        if (this.state.hourlyForecastData) {
            let forecastData = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
            const date = searchKey.currentDay.split(' ')[0];
            let updatedData = this.state.hourlyForecastData.filter(filteredData => filteredData.dt_txt.includes(date));
            forecastData = updatedData.map(igKey => {
                return <Stack
                    key={igKey.dt}
                    day={this.dateFormat(igKey.dt)}
                    forecast={igKey.weather[0].main}
                    tempHigh={igKey.main.temp_max}
                    tempLow={igKey.main.temp_min}
                    description={igKey.weather[0].description}
                    hourlyDataDisplay={null}
                    dateText={null}
                    footer={igKey.dt_txt.split(' ')[1]} />;
            });
            this.setState({ isClicked: true, forecastDataDisplay: forecastData });
        }
    }

    render() {
        let forecastData = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (this.state.dailyForecastData) {
            forecastData = this.state.dailyForecastData.map(igKey => {
                let currentDay = igKey.dt_txt;
                return <Link to={`/${this.dateFormat(igKey.dt)}`} key={igKey.dt} className="DivStyle" onClick={() => this.hourlyDataDisplay({ currentDay })}>
                    <Stack
                        key={igKey.dt}
                        day={this.dateFormat(igKey.dt)}
                        forecast={igKey.weather[0].main}
                        tempHigh={igKey.main.temp_max}
                        tempLow={igKey.main.temp_min}
                        description={igKey.weather[0].description}
                        hourlyDataDisplay={this.hourlyDataDisplay}
                        dateText={igKey.dt_txt}
                    /></Link>;
            });
        }

        return (
            <div>
                <div className="DivStyle">
                    {forecastData}
                </div>
                <div className="DivStyle">
                    {this.state.isClicked ? this.state.forecastDataDisplay : <div></div>}
                </div>
            </div>
        );
    }
}

export default Forecast;