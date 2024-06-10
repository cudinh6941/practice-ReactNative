import { signIn } from "@/store/authSlice"
import { AppDispatch } from "@/store/store"
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import { useDispatch } from "react-redux"

const Login = () => {
    
    const dispatch: AppDispatch = useDispatch()
    const handleTap = () => {
        dispatch(signIn("Tên người dùng của bạn"));
    }
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/Logo svg 1.png')}/>
            {/* <TouchableOpacity onPress={handleTap}>
                <View style = {styles.text}>
                    <Text>Login Page</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#0d5384',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text: {
        padding: 10,
        backgroundColor: 'green'
    }
})
export default Login