import React from 'react'
import { connect } from 'react-redux'

const  Users= (props) => {
    return (
     
       <div className='card'>
          <div className='card-panel'>
                <div> Name: { props.user.name }</div>
                <span>Email id: { props.user.email }</span> <br/><br/>
                <button className='green btn-small'
                        onClick={()=>props.dispatch({
                            type: 'EDIT_USER',
                            id: props.user.id
                        })}>
                    Edit
                </button>
                <button className='red btn-small'
                        onClick={()=>props.dispatch({
                            type: 'DELETE_USER',
                            id: props.user.id
                        })}>
                        Delete
                </button>
            </div>
       </div>
    )
}

export default connect()(Users)
