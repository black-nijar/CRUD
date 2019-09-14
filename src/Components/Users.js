import React from 'react'
import { connect } from 'react-redux'

const  Users= (props) => {
    return (
      <div>
         <div className='ui  segment'>
           <div className=''>
                <div> Name: { props.user.name }</div>
                <span>Email id: { props.user.email }</span> <br/><br/>
                <button className='ui green button'
                        onClick={()=>props.dispatch({
                            type: 'EDIT_USER',
                            id: props.user.id
                        })}>
                    Edit
                </button>
                <button className='ui red button'
                        onClick={()=>props.dispatch({
                            type: 'DELETE_USER',
                            id: props.user.id
                        })}>
                        Delete
                </button>
            </div>
         </div>  <br/>
      </div>
       
    )
}

export default connect()(Users)
