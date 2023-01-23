import { httpClient } from "@/utils/httpClient";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { INote, Inputs } from "@/types/note";

export const fetchNotes = createAsyncThunk(
  "notes/getAllNotes",
  async (thunkApi) => {
    const response = await httpClient("/notes");
    return response.data.notes;
  }
);

export const createNote = createAsyncThunk(
  "notes/createNote",
  async (note: Inputs, thunkApi) => {
    const response = await httpClient.post("/notes", note);
    return response.data.note;
  }
);

export const editNote = createAsyncThunk(
  "notes/editNote",
  async (note: INote) => {
    const response = await httpClient.patch(`/notes/${note._id}`, note);
    return response.data.note;
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
    builder.addCase(
      createNote.fulfilled,
      (state, action: PayloadAction<INote>) => {
        state.notes = [action.payload, ...state.notes];
      }
    );
    builder.addCase(
      editNote.fulfilled,
      (state, action: PayloadAction<INote>) => {
        const newNotes = state.notes.map((note) => {
          if (note._id === action.payload._id) {
            return action.payload;
          } else {
            return note;
          }
        });
        state.notes = newNotes;
      }
    );
  },
});

export default noteSlice.reducer;
export const selectAllNotes = (state: RootState) => state.note.notes;
