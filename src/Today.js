import React, { Component } from 'react';
import "./Today.css";

class Today extends Component {
    state = {  }
    render() { 
        let period = this.props.period;
        let iconURL = `http://openweathermap.org/img/wn/${period.weather[0].icon}@2x.png`;

        return ( 
        <div className="todays tile columns">
                <div className="today__image column is-half mt-0">
                    <img src={iconURL} className="today__img is-pulled-right" alt=""/>
                </div>
                <div className="column is-half today__informations has-text-left mt-6">
                <span className="today__date">Today</span>
                <span className="today__day"></span>
                <span className="today__temp has-text-weight-bold">{Math.round(period.main.temp)}°C</span>
                <span className="today__description has-text-weight-bold">{period.weather[0].description}</span>
                
            </div>
            
        </div>
        );
    }
}
 
export default Today;