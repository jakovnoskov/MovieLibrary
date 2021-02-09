const INITIAL_STATE = {
    login: null,
    password: null,
}

export default function auth(state = INITIAL_STATE, action:any) {
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                login: action.login
            }

        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.password
            }

        default:
            return state
    }
}