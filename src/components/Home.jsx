import React, { Component } from 'react';
import Movie from './Movie';

class Home extends Component {
  render() { 
    const { onAddClick, filteredMovies, sortMoviesData, allMovies } = this.props;
    let moviesToDisplay;

    if (filteredMovies.length > 0) {
      moviesToDisplay = sortMoviesData(filteredMovies);
    } else {
      moviesToDisplay = sortMoviesData(allMovies);
    }

    return (
      <React.Fragment>
        {moviesToDisplay.map(item => {
          return (
            <div key={item.id} className="titleList">
              <div className="title">
                <h1>{item.genre}</h1>
                <div className="titles-wrapper">
                  {item.movies.map(movie => {
                    return <Movie key={movie.id} movie={movie} onAddClick={onAddClick}/>
                  })} 
                </div>
              </div>
            </div> 
          )
        })}
      </React.Fragment>
    );
  }
}
 
export default Home;