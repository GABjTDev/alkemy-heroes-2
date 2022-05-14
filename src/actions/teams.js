import { TYPES } from "../types/types";

export const addHeroe = (heroe) => {
  return {
    type: TYPES.ADD_HEROE,
    payload: heroe,
  };
};

export const addVillan = (villan) => {
  return {
    type: TYPES.ADD_VILLAN,
    payload: villan,
  };
};

export const removeHeroe = (id) => {
  return {
    type: TYPES.REMOVE_HEROE,
    payload: id,
  };
};

export const removeVillan = (id) => {
  return {
    type: TYPES.REMOVE_VILLAN,
    payload: id,
  };
};

export const resetTeams = () => {
  return {
    type: TYPES.RESET_TEAMS,
  };
};
