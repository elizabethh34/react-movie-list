import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    searchInput: '',
  };

  handleInputChange = (event) => {
    this.setState({searchInput: event.target.value});
  }

  render() { 
    const { searchInput } = this.state;
    const { onUserSearch, allMovies, filteredMovies, onXClick } = this.props;

    return (
      <header className="header">
          <Link to="/">
            <img
              src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
              alt="netflix-font"
              border="0"
            />
          </Link>
          <div id="navigation" className="navigation">
            <nav>
              <ul>
                <li>
                  <Link to="/myList">My List</Link>
                </li>
              </ul>
            </nav>
          </div>
          <form id="search" className="search" onSubmit={(event) => event.preventDefault()}>
            <input
              onClick={() => onXClick()}
              onKeyUp={() => onUserSearch(searchInput, allMovies)}
              onChange={(event) => this.handleInputChange(event)}
              type="search"
              placeholder="Search for a title..."
              value={searchInput}
            />
            <div className="searchResults">
              {filteredMovies.length > 0 && searchInput !== '' ? `Found ${filteredMovies.length} movies with the query "${searchInput}"` : 'No valid matches selected'}
            </div>
          </form>
        </header>
    );
  }
}
 
export default Header;