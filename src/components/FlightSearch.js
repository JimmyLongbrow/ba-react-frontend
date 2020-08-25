import React from 'react';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

class FlightSearch extends React.Component {

  render() {
    return (
      <div>
        <nav>
          <button>Search</button>
          <button>Username</button>
        </nav>

        <h1>Virgin Airlines</h1>

        <SearchForm />
        <SearchResults />
      </div>
    );
  } // render

} // class FlightSearch

export default FlightSearch;
