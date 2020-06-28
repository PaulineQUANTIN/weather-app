import React, { Component } from 'react';
import "./Period.css";

class Period extends Component {
    state = {  }

    render() { 
        let period = this.props.period;
        let iconURL = `http://openweathermap.org/img/wn/${period.weather[0].icon}@2x.png`;

        return ( 
        <div className="period">
            <span className="period__date">{period.dt_txt}</span>
            <span className="period__description">{period.weather[0].description}</span>
            <img src={iconURL} className="period__img" alt=""/>
            <span className="period__temp">{Math.round(period.main.temp)}°C</span>
        </div>
        );
    }
}
 
export default Period;