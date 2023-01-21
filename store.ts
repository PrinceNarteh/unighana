import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./features/notes/notesSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      note: noteReducer,
    },
  });
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
