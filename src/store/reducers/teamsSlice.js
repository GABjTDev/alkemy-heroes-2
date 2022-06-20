import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroes: [],
  villans: [],
};

const teamsSlice = createSlice({
  name: "Teams",
  initialState,
  reducers: {
    addHeroe: (state, action) => {
      state.heroes = [...state.heroes, action.payload.heroe];
    },
    deleteHeroe: (state, action) => {
      state.heroes = action.payload.heroes;
    },
    getHeroeStorage: (state, action) => {
      state.heroes = action.payload.heroes;
    },
    addVillan: (state, action) => {
      state.villans = [...state.villans, action.payload.villan];
    },
    deleteVillan: (state, action) => {
      state.villans = action.payload.villans;
    },
    getVillansStorage: (state, action) => {
      state.villans = action.payload.villans;
    },
    resetTeam: () => initialState,
  },
});

export const {
  addHeroe,
  deleteHeroe,
  addVillan,
  deleteVillan,
  getHeroeStorage,
  getVillansStorage,
  resetTeam,
} = teamsSlice.actions;
export default teamsSlice.reducer;
