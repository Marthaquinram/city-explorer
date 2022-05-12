import React from "react";
import "./App.css";
 import axios from "axios";
// import { Form } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationName: "",
      lon: "",
      lat: ""
    };
  }
  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    console.log("Url" , url);
    const response = await axios.get(url);
    console.log("Response from Axios: ", response.data);
    this.setState({ locationName: response.data[0].display_name });
    this.setState({ lon: response.data[0].lon });
    this.setState({ lat: response.data[0].lat });
    console.log("response from state: ", this.state.lat);
  };

  render() {
    return (
      <div className="App">
       <h1>Welcome to City Explorer!</h1>
        <input onChange={(event) => this.setState({ searchQuery: event.target.value})} placeholder="search for city!" />
        <button onClick={this.getLocation}>Explore!</button> 
        {this.state.locationName && this.state.lat && this.state.lon &&
        <div className="results"> <h2> The city we search for is {this.state.locationName}, 
        Latitude: {this.state.lat}, 
        Longitude: {this.state.lon}</h2> </div>
        }
       </div>
    );
  }
}

export default Main;
