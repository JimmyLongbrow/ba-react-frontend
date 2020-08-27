
import React from 'react';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import axios from 'axios'
const AIRPLANES_URL = 'http://localhost:3000/airplanes'

class ShowSeatArrangements extends React.Component {


  constructor(props, context){
    super(props, context)
    this.state = {
      airplanes: [],
       seats:[],
       error: null,
       seatrow:0,
       seatcolumn: 0
    };
  }

getSeatGrid = (row,column) =>{

  try{
  let x = new Array(row);
  for( var i=0; i < x.length; i++)
  {
    var y = new Array(column);
    for( var j=0; j < y.length; j++)
    {
      y[j] = j;
    }
    x[i] = y;

  }
  return x;
}
catch(error)
{
  console.warn(error);
}
}

  render() {

//we are getting the plane details of the concerned Flight number here..i.e.item
    let flight =this.props.flightitem;
    let seats;
if(flight == null ) return null;
let showSeatArrangements = this.getSeatGrid(flight.row, flight.column);
if(showSeatArrangements != null)
{
seats =showSeatArrangements.map((c,i)=>{

let y =  c.map((row, j) =>
  {
  return (<td>
     <tr>
        <button className="square" onClick={() => alert('click')}>
       {i}{j}
      </button>
     </tr>
     </td>)
  });
  return <div>{y}</div>
});
}
 { return(
    <div>
{seats}
    </div>
)}


  }
} // class FlightSearch

export default ShowSeatArrangements;
