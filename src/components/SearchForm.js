import React from 'react';

class SearchForm extends React.Component{

  render() {

    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="From"
            />
          <input
            type="text"
            placeholder="To"
            />
          <button>Search flights</button>
        </form>


      </div>

    );
  } // render

} // class SearchForm

export default SearchForm;
