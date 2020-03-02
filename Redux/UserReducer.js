
const user = {
    firstName: '',
    lastName: '',
    email: '',
}
const initialState = {
    token: '',
    user: user
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOKEN':
            return { token: action.token };
        case 'USER_PROFILE':
            return { user: action.user };
    }
    return state
}

export default userReducer;