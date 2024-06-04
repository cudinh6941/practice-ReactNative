import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
} 
export default Header
const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: 'coral'
    },
    title: {
        paddingTop: 50,
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    }
})
