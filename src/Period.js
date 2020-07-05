import React, { Component } from 'react';
import "./Period.css";

class Period extends Component {
    state = {  
        weekDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        day: ""
    }
/*
    dayName = (e) => {
        for (let i=0; i<this.state.weekDays.length; i++) {
            this.setState({
                day: this.state.weekDays[i]
            })
            console.log(this.state.day)
        }
    }
    */

    render() { 
        let period = this.props.period;
        let iconURL = `http://openweathermap.org/img/wn/${period.weather[0].icon}@2x.png`;

        return ( 
        <div className="period tile">
            <span className="period__date">{period.dt_txt}</span>
            <span className="period__date"></span>
            <div>
                <img src={iconURL} className="period__img is-centered" alt=""/>
            </div>
            <span className="period__temp has-text-weight-bold">{Math.round(period.main.temp)}°C</span>
        </div>
        );
    }
}
 
export default Period;