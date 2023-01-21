import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNotes = createAsyncThunk(
  "notes/getAllNotes",
  async (thunkApi) => {
    const response = await fetch("http://google.com");
    const data = response.json();
    return data;
  }
);

const initialState = {
  notes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.notes.push(...action.payload);
    });
  },
});

export default noteSlice.reducer;
