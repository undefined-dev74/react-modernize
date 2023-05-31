import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type definations
type loadState = {
  loading: boolean | null;
};
// initial state
const initialState: loadState = { loading: false };

const loadSlice = createSlice({
  name: "load",
  initialState,
  reducers: {
    enableLoading: (state: any, { payload }: PayloadAction<loadState>) => {
      state.loading = payload;
    },
  },
});

const { reducer, actions } = loadSlice;
export const { enableLoading } = actions;
export default reducer;
