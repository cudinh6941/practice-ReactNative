import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    setSignIn(state, action: PayloadAction<string>) {
      state.isSigned = true;
      state.user = action.payload
    },
    setSignOut(state) {
      state.isSigned = false;
      state.user = null
    },
  },
});

export const { setSignIn, setSignOut } = authSlice.actions;

// Thunk action
export const signIn = (user: string) => async (dispatch: AppDispatch) => {
  await AsyncStorage.setItem('isSigned', 'true')
  await AsyncStorage.setItem('user', user)
  dispatch(setSignIn(user))
}

export const signOut = () => async (dispatch: AppDispatch) => {
  await AsyncStorage.removeItem('isSigned')
  await AsyncStorage.removeItem('user')
  dispatch(setSignOut())
}

export default authSlice.reducer;
