import React, { Component } from 'react';
import axios from 'axios';

import "./WeatherSystem.css";

import Period from "./Period";
import Today from "./Today";


class WeatherSystem extends Component {
    state = {
        periods: [],
        period: [],
        city: '',
     }

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=lens&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`)
        .then(res => {
            this.setState({
                periods: res.data.list.filter(day => day.dt_txt.includes("12")),
                period: res.data.list,
                city: res.data.city.name
            })
        })
    }

    handleSbmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`)
        .then(res => {
            this.setState({
                periods: res.data.list.filter(day => day.dt_txt.includes("12")),
                period: res.data.list,
                city: res.data.city.name
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    render() { 

        let today = this.state.period.map(period => {
            return <Today period={period}/>
        })
        let days = this.state.periods.map(period => {
            return <Period period={period} day={period.dt_txt}/> 
        });  
        
        let nextDays = today[0] === days[0] ? days.slice(1,5) : days.slice(0,4);

        return ( 

        <div className="container has-text-centered weathersystem">
            <form onSubmit={this.handleSbmit} className="mt-6">
                <input className="input is-rounded" type="text" placeholder="Enter a city..." onChange={this.handleChange} value={this.state.city}></input>  
                <h2 className="has-text-centered title is-2 mt-5">{this.state.city}</h2>                      
            </form>
            <div className="columns days is-middle">
                <div className="toDay columns mt-5">
                    {today[0]}
                </div>
                <div className="nextdays columns">
                    {nextDays}
                </div>
            </div>
        </div>
            
         );
    }
}
 
export default WeatherSystem;