import { TYPES } from "../types/types";

const initialState = {
    heroesTeam: [],
    villansTeam: []
}

export const teamsReducer = (state = initialState, action) => {

    switch (action.type) {

        case TYPES.ADD_HEROE:

                return {
                    ...state,
                    heroesTeam: [...state.heroesTeam, action.payload]
                }

        case TYPES.ADD_VILLAN:

            return {
                ...state,
                villansTeam: [...state.villansTeam, action.payload]
            }

        case TYPES.REMOVE_HEROE: 
            return {
                ...state,
                heroesTeam: state.heroesTeam.filter(heroe => heroe.id !== action.payload)
            }

        case TYPES.REMOVE_VILLAN: 
            return {
                ...state,
                villansTeam: state.villansTeam.filter(villan => villan.id !== action.payload)
            }

        default:
            return state;
    }

}