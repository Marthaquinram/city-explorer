import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";



class Movie extends React.Component {
  render() {
    return (
      <Container>
      <Card style={{ width: '15rem' }}  id="card">
        <Card.Body>
          <Card.Title className="fw-bold fs-5">
            {this.props.movie.title}
          </Card.Title  >
          <Card.Img id="moveImg"key={this.props.idx} src={this.props.movie.poster}/>
          <Card.Text>
            {this.props.movie.description}
          </Card.Text>
        </Card.Body>
      </Card>
      </Container>
    );
  }
}

export default Movie;
