import { TYPES } from "../types/types";

const initialState = {
    user: null,
    token: null
}

export const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case TYPES.LOGIN:
            return {
                ...state,
                ...action.payload
            }

        case TYPES.LOGOUT:
            return initialState;
    
        default: return state
    }

}