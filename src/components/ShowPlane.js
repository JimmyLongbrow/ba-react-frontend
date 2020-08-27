import React from 'react';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import axios from 'axios'
import ShowSeatArrangements from './ShowSeatArrangements'
const AIRPLANES_URL = 'http://localhost:3000/airplanes'

class ShowPlane extends React.Component {


  constructor(props, context){
    super(props, context)
    this.state = {
      airplanes: [],
       id: this.props.match.params.id,
       seats:[],
       error: null,
       seatrow:0,
       seatcolumn: 0
    };
  }

  getAirPlanes= () => {
    axios.get(AIRPLANES_URL)
    .then(response => {
      this.setState({airplanes: response.data});
    })
    .catch(error => console.warn(error));


  }; // showFlights

  componentDidMount(){

  this.getAirPlanes();

  } // componentDidMount()

  render() {

//we are getting the plane details of the concerned Flight number here..i.e.item
    let item =this.state.airplanes.find( a=> a.name == this.props.match.params.id);

if(item == null ) return null;
 { return(
    <div>
<h1> <strong>Airplane Details:</strong></h1>
          <li key={item.id}><strong>Id:</strong> {item.id} | <strong>Flight number:</strong> {item.name}| <strong>Row:</strong> {item.row} |<strong> Column:</strong> {item.column}
          </li>
<ShowSeatArrangements flightitem={item}/>
            </div>
)}


  }
} // class FlightSearch

export default ShowPlane;
