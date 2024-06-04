import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isSigned: boolean;
  user: string | null;
}

const initialState: AuthState = {
  isSigned: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<string>) {
      state.isSigned = true;
      state.user = action.payload;
    },
    signOut(state) {
      state.isSigned = false;
      state.user = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
