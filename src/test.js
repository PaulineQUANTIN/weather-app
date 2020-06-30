import React, { Component } from 'react';
import axios from 'axios';

import "./WeatherSystem.css";

import Period from "./Period";

class WeatherSystem extends Component {
    state = {
        periods: [],
        city: 'lens',
     }

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`)
        .then(res => {
            console.log(res.data);
            this.setState({
                periods: res.data.list,
                city: res.data.city.name
            })
        })
    }

    handleChangeCity = (e) => {
        e.preventDefault();
        this.setState({
            city: e.target.value
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`)
        .then(res => {
            let newCity = e.target.childNodes[0].value;
            console.log(newCity)
            this.setState({
                city: newCity
            })
        })
    }

    /*
    submitCity = (e) => {
        e.preventDefault();
        this.addCity(this.state.city);
    }

    addCity = (name) => {
        let newCity = {
          city: name,
        }
        this.setState({
          city: [...this.state.city,newCity]
        })
      }
      */

      /*
    handleChangeCity = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`)
        .then(res => {
            let newCity = e.target.childNodes[0].value;
            console.log(newCity)
            this.setState({
                city: newCity
            })
        })
    }
*/
/*

    submitCity = (e) => {
        e.preventDefault();
        this.addCity(this.state.city);
    }

    addCity = (name) => {
        let newCity = {
          city: name,
        }
        this.setState({
          city: [...this.state.city,newCity]
        })
      }
*/
/*
    changeCity = (e) => {
        this.setState({
            city: e.target.value
        })
        console.log(this.state.city)
    }*/

    render() { 
/*
        let periodsList = this.state.periods.map(period => {
            return <Period period={period} />
        });
        */

        let filteredList = this.state.periods.map(period => period.dt_txt.includes("12:00:00") ? <Period period={period} /> : "");

        return ( 

        <div className="container">
            <div className="media-content">
                <div className="content">
                    <form>
                        <div className="field">
                            <div className="control mt-6">
                                <input className="input is-rounded" type="text" placeholder="Enter a city..." onSubmit={this.handleChangeCi}></input>                       
                            </div>
                            <h2 className="has-text-centered title is-2">Lens</h2>
                            <div className="weathersystem">
                                {filteredList}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
         );
    }
}
 
export default WeatherSystem;