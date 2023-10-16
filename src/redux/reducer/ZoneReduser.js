import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  modalList: [],
  selectedModal: null
}

export const ZoneSlicer = createSlice({
  name: 'zone',
  initialState,
  reducers: {
    addModal: (state, action) => {
      state.modalList.push(action.payload);
    },

    toggleModal: (state, action) => {
      const index = action.payload.id-1;
      state.modalList[index] = action.payload.toggle;
    }
  }
})

export const { addModal, toggleModal } = ZoneSlicer.actions;

export default ZoneSlicer.reducer;
