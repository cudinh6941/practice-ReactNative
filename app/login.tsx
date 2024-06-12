import UserAPI from "@/Network/UserAPI"
import { signIn } from "@/store/authSlice"
import { AppDispatch } from "@/store/store"
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import { useDispatch } from "react-redux"


export default function Login() {
    const dispatch: AppDispatch = useDispatch()
    const handleTap = async () => {
        try {
            const data = await UserAPI.requestLogin();
            console.log("data login là", data);
            // dispatch(signIn(data.user));
        } catch (e) {
            console.error('Error fetching data', e);
        }
    //    dispatch(signIn(''));
    
    };
    
    return (
      <View style={styles.container}>
            <Image source={require('@/assets/images/Logo svg 1.png')}/>
            <TouchableOpacity onPress={handleTap}>
                <View style = {styles.text}>
                    <Text>Login Page</Text>
                </View>
            </TouchableOpacity>
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
