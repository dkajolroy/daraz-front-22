

export const loginVendorReducer = (state = { vendor: 0 }, action) => {
    switch (action.type) {
        case "VENDOR_LOGIN_REQUEST":
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        case "VENDOR_LOGIN_SUCCESS":
            return {
                vendor: action.payload,
                loading: false,
                error: 0
            }
        case "VENDOR_LOGIN_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}