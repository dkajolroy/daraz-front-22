

export const loginUser = (state = { user: 0 }, action) => {
    switch (action.type) {
        case "LOGIN_USER_REQUEST":
            return {
                ...state,
                loading: true,
                error: false,
            }
        case "LOGIN_USER_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: false
            }
        case "LOGIN_USER_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}