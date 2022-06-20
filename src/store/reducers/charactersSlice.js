import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  allCharacters: [],
  visibleCharacters: [],
  error: null,
};

const charactersSlice = createSlice({
  name: "Characters",
  initialState,
  reducers: {
    pendingCharacters: (state) => {
      state.status = "pending";
      state.allCharacters = [];
      state.visibleCharacters = [];
      state.error = null;
    },
    successCharacters: (state, action) => {
      state.status = "completed";
      state.allCharacters = action.payload.characters;
      state.visibleCharacters = action.payload.characters.slice(0, 12);
      state.error = null;
    },
    filterCharacters: (state, action) => {
      state.visibleCharacters = action.payload.filter;
    },
    errorCharacters: (state, action) => {
      state.status = "fail";
      state.allCharacters = [];
      state.visibleCharacters = [];
      state.error = action.payload.message;
    },

    startGetAllCharacters() {},
  },
});

export const {
  pendingCharacters,
  successCharacters,
  errorCharacters,
  startGetAllCharacters,
  filterCharacters,
} = charactersSlice.actions;
export default charactersSlice.reducer;
