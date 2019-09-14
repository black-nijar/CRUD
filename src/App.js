import React, { Component } from 'react'
import Form from './Components/Form';
import List from './Components/List';

class App extends Component {
  render() {
    return (
      <div className='App ui container'>
        <div className='ui row'>
          <div className='col s6 m12'>
            <Form />
          </div>
       </div>
      
        <List />
      </div>
    )
  }
}

export default App
