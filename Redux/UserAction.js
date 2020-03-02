
export function onSetToken(token) {    
    console.log('dispatch token', token);
    return {
        type: 'TOKEN',
        token: token
    }
}

export function onSetUser(user) {    
    console.log('dispatch user', user);
    return {
        type: 'USER_PROFILE',
        user: user
    }
}