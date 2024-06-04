import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '@/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TODOS_STORAGE_KEY = 'todos_storage_key';

interface Todo {
  name: string;
  key: string;
}

const initialState: Todo[] = [
  { name: 'buy coffee', key: '1' },
  { name: 'create an app', key: '2' },
  { name: 'play on the switch', key: '3' },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter(todo => todo.key !== action.payload);
    },
  },
});

export const { setTodos, addTodo, removeTodo } = todosSlice.actions;

export const loadTodos = () => async (dispatch: AppDispatch) => {
  try {
    const savedTodos = await AsyncStorage.getItem(TODOS_STORAGE_KEY);
    if (savedTodos !== null) {
      dispatch(setTodos(JSON.parse(savedTodos)));
    }
  } catch (e) {
    console.error('Error loading todos', e);
  }
};

export const saveTodos = (todos: Todo[]) => async () => {
  try {
    await AsyncStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    console.log('Data stored successfully!');
  } catch (e) {
    console.error('Error storing data', e);
  }
};

export default todosSlice.reducer;
