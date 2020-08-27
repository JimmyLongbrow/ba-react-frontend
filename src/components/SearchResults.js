import React from 'react';
import {Route, Link, HashRouter as Router} from 'react-router-dom';

class SearchResults extends React.Component {

  render() {
if(this.props.mylist == null ) return null;
  return this.props.mylist.map(flight => {  return (
      <div>

          <li key={flight.id}><strong>Date:</strong> {flight.date} | <strong>Flight number:</strong> <Link to={`/flights/${flight.flight_number}`}>{flight.flight_number}</Link> | <strong>Route:</strong> {flight.origin} to {flight.destination}</li>
              </div>

            )
}
    );

  }

} // render

// class SearchResults

export default SearchResults;
