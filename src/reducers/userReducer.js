
const initState = [ ]
const userReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return state.concat([action.data]);
        case 'DELETE_USER':
            return state.filter((user)=> user.id !== action.id)
        default:
            return state;
    }
}

export default userReducer;