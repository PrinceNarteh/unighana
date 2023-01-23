import { RootState } from "@/store";
import { INote, Inputs } from "@/types/note";
import { httpClient } from "@/utils/httpClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchNotes = createAsyncThunk("notes/getAllNotes", async () => {
  const response = await httpClient("/notes");
  return response.data.notes;
});

export const createNote = createAsyncThunk(
  "notes/createNote",
  async (note: Inputs) => {
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

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (noteId: string) => {
    const response = await httpClient.delete(`/notes/${noteId}`);
    return response.data;
  }
);

const initialState: {
  notes: INote[];
  filteredNotes: INote[];
} = {
  notes: [],
  filteredNotes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    filterNote: (state, action: PayloadAction<string>) => {
      if (action.payload === "") {
        state.filteredNotes = state.notes;
      } else {
        state.filteredNotes = state.notes.filter(
          (note) =>
            note.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            note.content.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchNotes.fulfilled,
      (state, action: PayloadAction<INote[]>) => {
        state.notes = action.payload;
        state.filteredNotes = action.payload;
      }
    );
    builder.addCase(
      createNote.fulfilled,
      (state, action: PayloadAction<INote>) => {
        state.notes = [action.payload, ...state.notes];
        state.filteredNotes = state.notes;
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
        state.filteredNotes = state.notes;
      }
    );
    builder.addCase(
      deleteNote.fulfilled,
      (state, action: PayloadAction<{ noteId: string }>) => {
        console.log(action.payload);
        state.notes = state.notes.filter(
          (note) => note._id !== action.payload.noteId
        );
        state.filteredNotes = state.notes;
      }
    );
  },
});

export default noteSlice.reducer;
export const { filterNote } = noteSlice.actions;
export const selectAllNotes = (state: RootState) => state.note.filteredNotes;
