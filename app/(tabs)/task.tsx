import { View, Text, StyleSheet } from "react-native"

const Task = () => {
    return(
        <View style= {styles.container}>
            <Text>TASK SCREEN</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})
export default Task