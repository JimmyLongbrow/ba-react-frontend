import React from 'react';

import SearchResults from './SearchResults'
class SearchForm extends React.Component{
constructor(props, context){
  super(props, context)
  this.state = {
    from: null,
    to: null,
    isupdated :false
  };
  this.items = null;
}
  handleSubmit = (event) => {
    event.preventDefault();

const info = this.props.searchFlights;


       this.items = info.filter((data)=>{
      if(this.state.from == null && this.state.to == null)
      {
          return info
      }
      else if( this.state.from != null && this.state.to != null && data.origin.toLowerCase().includes(this.state.from.toLowerCase()) && data.destination.toLowerCase().includes(this.state.to.toLowerCase())){

          return data
      }
      else if( this.state.from != null && this.state.to == null && data.origin.toLowerCase().includes(this.state.from.toLowerCase())){

          return data
      }
      else if(  this.state.to != null  && this.state.from == null && data.destination.toLowerCase().includes(this.state.to.toLowerCase())){

          return data
      }

    });
    this.setState({isupdated:true});
  }; // handleSubmit()

  handleFromInput = (event) => {
    this.setState({from: event.target.value});
  }; // handleFromInput()

  handleToInput = (event) => {
    this.setState({to: event.target.value});
  }; // handleToInput()

  render() {
    return (
      <div>


        <h1>Virgin Airlines</h1>
<h2>Please enter Origin and Destination details proceed futher!!</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="From"
            onChange={this.handleFromInput}
            />
          <input
            type="text"
            placeholder="To"
            onChange={this.handleToInput}
            />
          <button>Search flights</button>
        </form>
<SearchResults mylist = {this.items}/>

      </div>

    );
  } // render()

} // class SearchForm

export default SearchForm;
