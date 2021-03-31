import React, { Component, Fragment } from 'react';
import * as MovieAPI from './lib/MovieAPI';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import MyList from './components/MyList';
import TableView from './components/TableView';

class App extends Component {
  state = {
    allGenres: [],
    allMovies: [],
    sortedMovies: [],
    filteredMovies: [],
  };

  componentDidMount() {
    MovieAPI.genres()
    .then(data => this.setState({
      allGenres: data,
    }))
    .catch(error => console.log(error));

    MovieAPI.getAll()
    .then(data => {
      this.setState({
        sortedMovies: this.sortMoviesData(data),
        allMovies: data,
      });
    })
    .catch(error => console.log(error));  
  }

  sortMoviesData = (movies) => {
    let sorted = [];

    for (const movie of movies) {
      const genreList = movie.genre_ids;
      
      for (const genreId of genreList) {
        const existingId = sorted.find(item => {
          return item.id === genreId;
        });

        if (!existingId) {
          sorted.push({
            genre: null,
            id: genreId,
            movies: [movie],
          });
        } else {
          existingId.movies.push(movie);
        }
      }
    }

    for (const genre of this.state.allGenres) {
      for (const element of sorted) {
        if (genre.id === element.id) {
           element.genre = genre.name;
        }
      }
    }
    
    return sorted.sort((a, b) => a.genre.localeCompare(b.genre));
  }

  handleAddClick = (movie) => {
    if (movie.my_list) {
      MovieAPI.removeFromList(movie)
      .then(updatedMovie => {
        this.setState(prevState => {
          return {
            filteredMovies: prevState.filteredMovies.map(item => {
              if (item.title === updatedMovie.title) {
                return updatedMovie;
              } else {
                return item;
              }
            })
          }
        })
      })
      .then(() => MovieAPI.getAll())
      .then(data => {
        this.setState({
          allMovies: data,
          sortedMovies: this.sortMoviesData(data)
        })
      })
      .catch(error => console.log(error));
    } else {
      MovieAPI.addToList(movie)
      .then(updatedMovie => {
        this.setState(prevState => {
          return {
            filteredMovies: prevState.filteredMovies.map(item => {
              if (item.title === updatedMovie.title) {
                return updatedMovie;
              } else {
                return item;
              }
            })
          }
        })
      })
      .then(() => MovieAPI.getAll())
      .then(data => {
        this.setState({
          allMovies: data,
          sortedMovies: this.sortMoviesData(data)
        })
      })
      .catch(error => console.log(error));
    }
  }

  handleUserSearch = (search, movieList) => {
    const searchTerm = search.toLowerCase();
    let filtered = [];
    
    for (const movie of movieList) {
      const title = movie.title.toLowerCase();
      const overview = movie.overview.toLowerCase();
      if (title.indexOf(searchTerm) > -1 || overview.indexOf(searchTerm) > -1) {
        filtered.push(movie);
      }
    }
  
    this.setState({filteredMovies: filtered}); 
  }

  handleXClick = () => {
    this.setState({filteredMovies: []});
  }
  
  render = () => {
    const { allMovies, filteredMovies } = this.state;

    return (
      <Fragment>
        <Header allMovies={allMovies} filteredMovies={filteredMovies} onXClick={this.handleXClick} onUserSearch={this.handleUserSearch}/>
        <Switch>
          <Route
            exact path="/"
            render={props => <Home allMovies={allMovies} sortMoviesData={this.sortMoviesData} filteredMovies={filteredMovies} onAddClick={this.handleAddClick} {...props}/>}
          />
          <Route
            exact path="/myList"
            render={props => <MyList allMovies={allMovies} onAddClick={this.handleAddClick} {...props}/>}
          />
          <Route
            path="/myList/tableView"
            render={props => <TableView allMovies={allMovies} onAddClick={this.handleAddClick} {...props}/>}
          />
        </Switch>
      </Fragment>
    );
  };
}

export default App;