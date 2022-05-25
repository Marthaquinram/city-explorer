import React from "react";
import "./App.css";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {

    render() {
    return (
      <div className="App">
        {this.props.forecast && 
        this.props.forecast.map(day => (
        <WeatherDay date={day.date} description={day.description} />

        ))
        
        } 
       
      </div>
    );
  }
}

export default Weather;
