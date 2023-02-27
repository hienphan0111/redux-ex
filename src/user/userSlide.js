import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: [{
    fName: 'Hien',
    lName: 'Phan'
  }, { fName: 'Tuan', lName: 'Nguyen'}],
  total: 2,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, actions) => {
      state.name = [...state.name, actions.payload]
    }
  }
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;