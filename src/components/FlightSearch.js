import React from 'react';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import axios from 'axios'

const FLIGHTS_URL = 'http://localhost:3000/flights'

class FlightSearch extends React.Component {

  state = {
    flights: []
  };

  showFlights = () => {
    axios.get(FLIGHTS_URL)
    .then(response => {
      console.log(response.data);
      this.setState({flights: response.data});
    })
    .catch(error => console.warn(error));
  }; // showFlights

  componentDidMount(){
    this.showFlights();
  } // componentDidMount()

  render() {
    return (
      <div>
        <nav>
          <button>Search</button>
          <button>Username</button>
        </nav>

        <h1>Virgin Airlines</h1>

        <SearchForm />

        <h2>Flight Search Results</h2>
        <hr></hr>        

        {
          this.state.flights.map(flight => {
            return <li key={flight.id}><strong>Date:</strong> {flight.date} | <strong>Flight number:</strong> {flight.flight_number} | <strong>Route:</strong> {flight.origin} to {flight.destination}</li>;
          })
        }

        <hr></hr>

        <Router>
          <Route exact path ="/search" component={FlightSearch} />
        </Router>

      </div>
    );
  } // render

} // class FlightSearch

export default FlightSearch;
