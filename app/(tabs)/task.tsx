import { signIn, signOut } from "@/store/authSlice"
import { AppDispatch } from "@/store/store"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"

const Task = () => {
    const dispatch: AppDispatch = useDispatch()

    const handleTap = () => {
        dispatch(signOut());
    }
    return(
        <View style= {styles.container}>
            <Text>TASK SCREEN</Text>
            <TouchableOpacity style= {{padding: 10, backgroundColor: 'green'}} onPress={handleTap}>
                <Text>Log out</Text>
            </TouchableOpacity>
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