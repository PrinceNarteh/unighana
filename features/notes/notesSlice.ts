import { httpClient } from "@/utils/httpClient";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { INote } from "@/types/note";

export const fetchNotes = createAsyncThunk(
  "notes/getAllNotes",
  async (thunkApi) => {
    const response = await httpClient("/notes");
    return response.data.notes;
  }
);

const initialState: {
  notes: INote[];
} = {
  notes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchNotes.fulfilled,
      (state, action: PayloadAction<INote[]>) => {
        state.notes = action.payload;
      }
    );
  },
});

export default noteSlice.reducer;
export const selectAllNotes = (state: RootState) => state.note.notes;
