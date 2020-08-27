import React from 'react';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import ShowPlane from './ShowPlane'
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
    console.log('Loaded.');
    this.showFlights();
  } // componentDidMount()

  render() {
    return (
      <div>

      <Router>

        <Route exact path="/search" component={FlightSearch} />
        <Route exact path="/flights/:id" component={ShowPlane} />

        <SearchForm searchFlights={this.state.flights}/>


      </Router>

      </div>
    );
  } // render

} // class FlightSearch

export default FlightSearch;
