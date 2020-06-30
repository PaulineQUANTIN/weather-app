import React, { Component } from 'react';
import axios from 'axios';

import "./WeatherSystem.css";

import Period from "./Period";


class WeatherSystem extends Component {
    state = {
        periods: [],
        city: '',
     }

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=lens&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`)
        .then(res => {
            this.setState({
                periods: res.data.list,
                city: res.data.city.name
            })
        })
    }

    handleSbmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`)
        .then(res => {
            this.setState({
                city: res.data.city.name,
                periods: res.data.list,
            })
        })
        console.log(this.state.city)
    }

    handleChange= (e) => {
        this.setState({
            city: e.target.value
        })
        console.log(this.state.city)
    }

    render() { 

        let currentDay = this.state.periods.map(period => {
            return <Period className="currentDay is" period={period}/>
        });
    
        let nextDays = this.state.periods.map(period => period.dt_txt.includes("12") ? <Period period={period} /> : null);

        return ( 

        <div className="container">
            <form onSubmit={this.handleSbmit} className="mt-6">
                <input className="input is-rounded" type="text" placeholder="Enter a city..." onChange={this.handleChange} value={this.state.city}></input>  
                <h2 className="has-text-centered title is-2">{this.state.city}</h2>                      
            </form>
            <div className="columns has-text-centered">
                {currentDay[0]}
            </div>
            <div className="weathersystem ">
                    {nextDays[4]}{nextDays[12]}{nextDays[20]}{nextDays[28]}
            </div>
        </div>
            
         );
    }
}
 
export default WeatherSystem;