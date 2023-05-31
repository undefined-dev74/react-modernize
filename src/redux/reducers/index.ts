import { combineReducers } from "@reduxjs/toolkit";
import snackbarSlice from "../slices/snackbarSlice";
import loadSlice from "../slices/loadSlice";
const rootReducer = combineReducers({
  snackbar: snackbarSlice,
  loading: loadSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
