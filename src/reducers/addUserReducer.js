
const initState = []
const addUserReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return state.concat([action.data]);
        case 'DELETE_USER':
            return state.filter((user) => user.id !== action.id);
        case 'EDIT_USER':
            return state.map((user) =>
                user.id === action.id ? { ...user, edit: !user.edit }
                    : user);
        case 'UPDATE_USER':
            return state.map((user) => {
                if (user.id === action.id) {
                    return {
                        ...user,
                        name: action.User.newName,
                        email: action.User.newEmail,
                        edit: !user.edit
                    }
                }
                else return user
            })
        default:
            return state;
    }
}

export default addUserReducer;