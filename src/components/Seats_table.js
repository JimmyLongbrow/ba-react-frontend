import React, { Component } from 'react';

class Seats_table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         passengers: [
            { id: 1, name: 'Peter', age: 21, email: 'Peter@email.com' },
            { id: 2, name: 'Luke', age: 19, email: 'Luke@email.com' },
            { id: 3, name: 'Joel', age: 16, email: 'Joel@email.com' },
            { id: 4, name: 'Zara', age: 25, email: 'Zara@email.com' },
            { id: 5, name: 'Joel', age: 16, email: 'Joel@email.com' },
            { id: 6, name: 'Zara', age: 25, email: 'Zara@email.com' },
            { id: 7, name: 'Joel', age: 16, email: 'Joel@email.com' },
            { id: 8, name: 'Zara', age: 25, email: 'Zara@email.com' }
         ]
      }
   }

   renderTableData = () => {
        return this.state.passengers.map((passenger, index) => {
           const { id, name, age, email } = passenger //destructuring
           return (
             <td>
              <tr key={id}>
                 {name}
              </tr>
              </td>
           )
        })
     }

     // renderTableHeader = () => {
     //       let header = Object.keys(this.state.passengers[0])
     //       return header.map((key, index) => {
     //          return <th key={index}>{key.toUpperCase()}</th>
     //       })
     //    }

     render() {
        return (
          <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
        )
     }

}

export default Seats_table
