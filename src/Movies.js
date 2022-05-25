import React from 'react'

import Movie from './Movie';

class Movies extends React.Component {
  render() {
    return (
  <div>
   
  {
  this.props.movieSug && this.props.movieSug.map((movie, idx) => <Movie movie={movie} idx={idx}/>)
  }
  
  </div>

    );
  }
}

export default Movies;
