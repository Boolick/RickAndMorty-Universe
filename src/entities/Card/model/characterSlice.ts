import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from './types';

interface CharactersState {
  characters: Character[];
}

const initialState: CharactersState = {
  characters: [],
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Character[]>) {
      state.characters = action.payload;
    },
    addCharacter(state, action: PayloadAction<Character>) {
      state.characters.push(action.payload);
    },
    clearCharacters(state) {
      state.characters = [];
    },
  },
});

export const { setCharacters, addCharacter, clearCharacters } =
  charactersSlice.actions;
export default charactersSlice.reducer;
