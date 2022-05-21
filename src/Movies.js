import React from 'react'

class Movies extends React.Component {
  render() {
    return (
  <>
  {this.props.movieSug && 
  this.props.movieSug
}
  </>
    );
  }
}

export default Movies;
