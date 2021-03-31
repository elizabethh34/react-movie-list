import React from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom';

const MyList = (props) => {
  const { allMovies, onAddClick } = props;

  const myListMovies = allMovies.filter(m => m.my_list);

  return (
    <div className="titleList">
        <div className="title">
          <h1>My List</h1>
          <Link to="/myList/tableView" >
            <button className="table-view">Table View</button>
          </Link>
          <div className="titles-wrapper">
            {myListMovies.map(movie => {
              return <Movie key={movie.id} movie={movie} onAddClick={onAddClick}/>
            })}  
          </div>
        </div>
      </div> 
  );
}
 
export default MyList;
 
