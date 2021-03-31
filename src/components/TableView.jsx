import React from 'react';

const TableView = (props) => {
  const { allMovies, onAddClick } = props;

  const myListMovies = allMovies.filter(m => m.my_list);

  return (
    <div className="titleList">
        <div className="title">
          <h1>Table View</h1>
          <div className="titles-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Rating</th>
                  <th>Genres</th>
                </tr>
              </thead>
              <tbody>
                {myListMovies.map(movie => {
                  return (
                    <tr key={movie.id}>
                      <td>{movie.title}</td>
                      <td>{movie.vote_average}/10</td>
                      <td>{movie.genre_ids}</td>
                      <td>
                        <button onClick={() => onAddClick(movie)} className="table-remove">Remove</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table> 
          </div>
        </div>
      </div> 
  );
}
 
export default TableView;