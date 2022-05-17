import React from "react";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";


class Map extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Search for a city!</Form.Label>
            <Form.Control
              onChange={this.props.getLocation}
              placeholder="search for city!"
            />
            {this.props.locationName && this.props.lat && this.props.lon && (
              <h2>
            
                The city we search for is {this.props.locationName}, Latitude:
                {this.props.lat}, Longitude: {this.props.lon}
              </h2>
            )}
          </Form.Group>
          <>
            <Button id="button" type="submit" onClick={this.props.getLocation}>
              Explore!
            </Button>
            <Image
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.lat},${this.props.lon}&zoom=10`}
            />
            <p>{this.props.responseError}</p>
          </>
        </Form>
      </>
    );
  }
}

export default Map;
