import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name  = this.getName.value;
        const email = this.getEmail.value;
        const data  = {
            id: new Date(),
            name,
            email,
            edit: false
        } 
        console.log(data)
        this.props.dispatch({
            type: 'ADD_USER',
            data
        })
        this.getEmail.value = ' ';
        this.getName.value  = ' ';
    }
    render() {
        return (
            <div className='ui form'>
              <div><h1>Form</h1></div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor='name'>Name</label>
                  <input name='name'
                         component='input'
                         type='text'
                         placeholder='Name'
                         ref={(input)=> this.getName = input}
                  /> 
                </div><br/>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        name='email'
                        component='input'
                        type='email'
                        placeholder='Email Id'
                        ref={(input)=> this.getEmail = input}
                    />
                </div><br/>
                <button className='ui blue button'>Submit</button>
              </form>
            </div>
        )
    }
}


export default connect()(Form)