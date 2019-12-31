import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditUser from './EditUser';
import Users from './Users';

class List extends Component {
    render() {
        const { users } = this.props
        console.log(users);
        return (
            <div>
                <div><h4>User list</h4></div>
                {users.map((user, index) => (
                    <div key={index}>
                        {
                            user.edit ? <EditUser user={user} key={index} /> :
                                <Users key={index} user={user} />
                        }
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
}
export default connect(mapStateToProps)(List)
