import { TYPES } from "../types/types";

export const login = (user) => {
    return{
        type: TYPES.LOGIN,
        payload: user
    }
}

export const logout = () => {
    return{
        type: TYPES.LOGOUT,
    }
}