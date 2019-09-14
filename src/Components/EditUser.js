import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditUser extends Component {

    handleEdit= (e) => {
        e.preventDefault();
        const newName = this.name.value;
        const newEmail = this.email.value;
        const User = {
              newName,
              newEmail
        }
        this.props.dispatch({
            type: "UPDATE_USER",
            id: this.props.user.id,
            User: User
        })
    }

    render() {
        return (
            <div className='ui segment'>
              <form onSubmit={this.handleEdit} className='ui form'>
              <div>
                  <input type='text'
                       ref={(input)=>this.name = input}
                       defaultValue={this.props.user.name}
                       placeholder='Name'
                    /> 
              </div><br/>
              <div>
                <input ref={(input)=> this.email = input }
                        defaultValue={this.props.user.email}
                        placeholder='Email Id'
                />  
              </div>
                <br/>
                <button className='ui blue button'>
                    Update
                </button><br/>
              </form><br/>
            </div>
        )
    }
}

export default connect()(EditUser)
