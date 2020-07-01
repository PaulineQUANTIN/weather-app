import React, { Component } from 'react';
import axios from 'axios';

import "./WeatherSystem.css";

import Period from "./Period";


class WeatherSystem extends Component {
    state = {
        periods: [],
        city: '',
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
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
        let today = currentDay[0].dt_txt == "";
        let dayName = this.nextDays.map(day => day.dt_txt)

        return ( 

        <div className="container has-text-centered">
            <form onSubmit={this.handleSbmit} className="mt-6">
                <input className="input is-rounded" type="text" placeholder="Enter a city..." onChange={this.handleChange} value={this.state.city}></input>  
                <h2 className="has-text-centered title is-2 mt-5">{this.state.city}</h2>                      
            </form>
            <div className="columns is-centered mt-5">
                {currentDay[0]}
            </div>
            <div className="weathersystem columns">
                {nextDays}
            </div>
        </div>
            
         );
    }
}
 
export default WeatherSystem;