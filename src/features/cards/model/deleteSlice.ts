import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeletedState {
  deletedIds: number[];
}

const initialState: DeletedState = {
  deletedIds: JSON.parse(localStorage.getItem('deletedCards') || '[]'),
};
export const deleteSlice = createSlice({
  name: 'delete',
  initialState,
  reducers: {
    deleteCard(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (!state.deletedIds.includes(id)) {
        state.deletedIds.push(id);
        localStorage.setItem('deletedCards', JSON.stringify(state.deletedIds));
      }
    },
    restoreAllCards(state) {
      state.deletedIds = [];
      localStorage.setItem('deletedCards', JSON.stringify(state.deletedIds));
    },
  },
});
export const { deleteCard, restoreAllCards } = deleteSlice.actions;
export default deleteSlice.reducer;
