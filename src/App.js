import React, { Component } from 'react'
import Form from './Components/Form';
import List from './Components/List';

class App extends Component {
  render() {
    return (
      <div className='ui App container'>
        <div className="ui two column grid">
              <div className="column">
                <div className="ui segment">
                  <Form/>
                </div>
              </div>
              <div className='column'>
                 <div className=''>
                    <List/>
                 </div>
               
              </div>
              
            </div>
      </div>
     
      
    )
  }
}

export default App
