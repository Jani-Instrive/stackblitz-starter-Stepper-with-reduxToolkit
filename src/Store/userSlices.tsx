import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  address: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  address: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const { setName, setEmail, setAddress } = userSlice.actions;

export default userSlice.reducer;
