const initialState = {
    REDIRECT_TO: null
}

const networkReducer=(state = initialState, action)=>{
    switch (action.type) {
        case "SET_REDIRECT":
            return {
                ...state,
                REDIRECT_TO: action.payload
            }
        case "CLEAR":
            return{
                ...state,
                REDIRECT_TO: null
            }
        default:
            return state
    }
}

export default networkReducer