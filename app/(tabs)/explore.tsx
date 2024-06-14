import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos, addTodo, removeTodo, saveTodos } from '@/store/todoSlice';
import Header from '@/components/Header';
import TodoItem from '@/components/TodoItem';
import AddItem from '@/components/AddItem';
import { RootState, AppDispatch } from '@/store/store';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Explore() {
  const [text, setText] = useState('');
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleTap = () => {
    if (text.trim() && text.length > 3) {
      const newKey = String(todos.length + 1);
      const newTodo = { name: text, key: newKey };
      dispatch(addTodo(newTodo));
      dispatch(saveTodos([...todos, newTodo]));
      setText('');
    } else {
      Alert.alert('OOPS!', 'Todo must be over 3 char long', [
        { text: 'Understood', onPress: () => console.log('Tapped') },
      ]);
    }
  };

  const pressHandler = (key: string) => {
    const updatedTodos = todos.filter(todo => todo.key !== key);
    dispatch(removeTodo(key));
    dispatch(saveTodos(updatedTodos));
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <SafeAreaView style={styles.content}>
        <AddItem textInput={text} setNewText={setText} handleTap={handleTap} />
        <View style={styles.content}>
          <FlatList data={todos} renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
  },
  content: {
    justifyContent: 'center',
    flex: 1,
  },
});
