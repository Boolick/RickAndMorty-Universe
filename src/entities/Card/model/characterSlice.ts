import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from './types';

interface CharactersState {
  characters: Character[];
  deletedIds: number[];
}

const initialState: CharactersState = {
  characters: [],
  deletedIds: JSON.parse(localStorage.getItem('deletedIds') || '[]'),
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Character[]>) {
      state.characters = action.payload.filter(
        (character) => !state.deletedIds.includes(character.id),
      );
    },
    addCharacter(state, action: PayloadAction<Character>) {
      state.characters.push(action.payload);
    },
  },
});

export const { setCharacters, addCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
