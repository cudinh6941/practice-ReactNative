import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet, TouchableOpacity, Platform, UIManager } from 'react-native';

type TodoItemProps = {
  item: {
    name: string;
    key: string;
  };
  pressHandler: (key: string) => void; 
};
const handlePress = (item: any) => {
  console.log(item)
}
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const TodoItem: React.FC<TodoItemProps> = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity>
      <View style={styles.viewText}>
          <MaterialIcons name ='delete' size = {18} color = '#333' onPress={() => pressHandler(item.key)} />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>

  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5' // Màu nền tùy chọn
  },
  content: {
    padding: 40,
    flexDirection: 'row',
  },
  list: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 50,
    borderRadius: 10
  },
  viewText: {
    backgroundColor: 'pink',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 20,
  }
});
