import { useEffect, useState } from "react"
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Button } from "react-native"

type TodoItemProps = {
  textInput: string
  setNewText: (text: string) => void
  handleTap: () => void
}

const AddItem: React.FC<TodoItemProps> = ({textInput, setNewText, handleTap}) => {
  useEffect(() => {
    console.log("Component is mounted")
    return () => {
      console.log("component is unmounted")
    }
  })
    return (
        <View style={styles.addInput}>
        <TextInput style={styles.input} value={textInput} onChangeText={setNewText}/>
        <TouchableOpacity style={styles.button} onPress={handleTap}>
            <Text style={{textAlign: 'center'}}>Add Item</Text>
        </TouchableOpacity>
        {/* <Button onPress={handleTap}  title="Add to do" color='green'/> */}
      </View>
    )
}
export default AddItem
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5', // Màu nền tùy chọn
    },
    content: {
      // padding: 40,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    list: {
       marginVertical: 50,
      backgroundColor: 'green',
      padding: 50,
      borderRadius: 10,
      height: 300
    }, 
    input: {
      borderColor: 'gray',
      padding: 20,
      margin: 10,
      borderWidth: 1,
      borderRadius: 10
    },
    addInput: {
      marginTop: 30,
      justifyContent: 'center',
      gap: 20
    },
    button: {
      backgroundColor: 'green',
      padding: 20,
      borderRadius: 10,
      marginHorizontal: 10
    }
    
  });