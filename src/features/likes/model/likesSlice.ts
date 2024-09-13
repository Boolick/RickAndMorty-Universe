import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikesState {
  likedIds: number[];
}
const initialState: LikesState = {
  likedIds: JSON.parse(localStorage.getItem('likedCards') || '[]'),
};

export const likesSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.likedIds.includes(id)) {
        state.likedIds = state.likedIds.filter((likedId) => likedId !== id);
      } else {
        state.likedIds.push(id);
      }
      localStorage.setItem('likedCards', JSON.stringify(state.likedIds));
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
