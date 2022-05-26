import React from "react";


class WeatherDay extends React.Component {

    render() {
    return (
      <div className="weatherday">
    <h1>{this.props.date}  {this.props.description}</h1>
      </div>
    );
  }
}

export default WeatherDay;
