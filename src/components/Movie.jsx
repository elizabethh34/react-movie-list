import React from 'react';

const Movie = (props) => {
  const { movie, onAddClick } = props;

  return (
    <div className="movie">
      <img src={movie.poster_path} alt={movie.title}/>
      <div className="overlay">
        <div className="title">{movie.title}</div>
        <div className="rating">{movie.vote_average}/10</div>
        <div className="plot">{movie.overview}</div>
        <div
          onClick={() => onAddClick(movie)}
          data-toggled={movie.my_list ? "true" : "false"}
          className="listToggle">
          <div>
            <i className="fa fa-fw fa-plus"></i>
            <i className="fa fa-fw fa-check"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Movie;