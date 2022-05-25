import React from "react";
import { Card } from "react-bootstrap";


class Movie extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title >
            {this.props.movie.title}
          </Card.Title>
          <Card.Img key={this.props.idx} src={this.props.movie.poster}/>
          <Card.Text>
            {this.props.movie.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Movie;
