import React from "react";
import "./App.css";
import axios from "axios";
import Map from "./Map";
import Weather from "./Weather";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationName: "",
      lon: "",
      lat: "",
      reponseError: "",
      forecastData: []
    };
  }
  getLocation = async (event) => {
    event.preventDefault();
    try{ 
      console.log('I am here in TRY');
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    console.log("Url" , url);
    const response = await axios.get(url);
    console.log("Response from Axios: ", response.data);
    this.setState({ locationName: response.data[0].display_name,lon: response.data[0].lon, lat: response.data[0].lat});
    console.log("response from state: ", this.state.lat);
    } catch(error){
      this.handleError(error);
    }
    this.getWeather();
  };
  getWeather = async () =>{
    try {
    const url = `http://localhost:3001/weather?cities=${this.state.searchQuery}`;
    const response = await axios.get(url);
    this.setState({ forecastData: response.data.map(days => `On this day, ${days.data}, ${days.description}`)})
  } catch(error){
    this.handleError(error);
  }
  };
  handleClick = (event) => {
    event.preventDefault();
    this.getLocation();
  };

  handleError = (error) => {
    this.setState({ 
      responseError: `ERRORRRRR: CODE ${error.response.status}, ${error.response.data.error}`,
      forecastData: [],
      locationName: '',
  })
  }
  render() {
    console.log('main state: ', this.state);
    return (
      <div className="App">
       <h1>Welcome to City Explorer!</h1>
        
        <Form onSubmit={this.getLocation}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Search for a city!</Form.Label>
            <Form.Control className="forms"
              onChange={(event) => this.setState({ searchQuery: event.target.value})} 
              placeholder="search for city!"
            />
          </Form.Group>
            <Button id="button" type="submit">
              Explore!
            </Button>
        </Form>
        {
         this.state.locationName ?  
          <>
            <Map lat={this.state.lat} lon={this.state.lon}
            responseError={this.state.responseError}/>
            <div className="results"> <h2> The city we search for is {this.state.locationName}, 
            Latitude: {this.state.lat}, 
            Longitude: {this.state.lon}</h2> </div>
            <Weather forecast={this.state.forecastData} />
          </>
        : <h3> {this.state.responseError}</h3>}
      </div>
    );
  }
}

export default Main;
