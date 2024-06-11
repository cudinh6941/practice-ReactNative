import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppDispatch, RootState } from './store';

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
      state.user = action.payload;
    },
    setSignOut(state) {
      state.isSigned = false;
      state.user = null;
    },
    setIsSigned(state, action: PayloadAction<boolean>) {
      state.isSigned = action.payload;
    },
  },
});

export const { setSignIn, setSignOut, setIsSigned } = authSlice.actions;

// Thunk action to retrieve isSigned from AsyncStorage
export const getIsSigned = () => async (dispatch: AppDispatch, getState: () => RootState ) => {
  try {
    const {auth} = getState()
    if (!auth.isSigned) {
      const isSigned = await AsyncStorage.getItem('isSigned');
      if (isSigned !== null) {
        dispatch(setIsSigned(JSON.parse(isSigned)));
      }
    }
  } catch (error) {
    console.error('Error retrieving isSigned from AsyncStorage:', error);
  }
};

// Thunk action to sign in
export const signIn = (user: string) => async (dispatch: AppDispatch) => {
  try {
    await AsyncStorage.setItem('isSigned', JSON.stringify(true));
    await AsyncStorage.setItem('user', user);
    dispatch(setSignIn(user));
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

// Thunk action to sign out
export const signOut = () => async (dispatch: AppDispatch) => {
  try {
    await AsyncStorage.removeItem('isSigned');
    await AsyncStorage.removeItem('user');
    dispatch(setSignOut());
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

export default authSlice.reducer;
