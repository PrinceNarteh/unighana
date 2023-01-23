import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      console.log(state);
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

export default modalSlice.reducer;
export const selectModalState = (state: RootState) => state.modal.open;
export const { openModal, closeModal } = modalSlice.actions;
