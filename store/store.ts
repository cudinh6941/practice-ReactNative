
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '@/store/todoSlice';
import authReducer from '@/store/authSlice';
const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: authReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
