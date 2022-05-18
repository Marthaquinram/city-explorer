import React from "react";
import { Image } from "react-bootstrap";


class Map extends React.Component {
  render() {
    return (
      <>
        
            <Image className="map"
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.lat},${this.props.lon}&zoom=10`}
              />
            <p>{this.props.responseError}</p>
          
        
          </>
    
    
    );
  }
}

export default Map;
