import React from "react";
import "./App.css";

class Weather extends React.Component {

    render() {
    return (
      <div className="App">
    <h3>{this.props.forecast[0]}</h3>
    <h3>{this.props.forecast[1]}</h3>
    <h3>{this.props.forecast[2]}</h3>
       
      </div>
    );
  }
}

export default Weather;
